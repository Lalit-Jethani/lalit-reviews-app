import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect} from 'react-redux';
import { bindActionCreators } from "redux";
import reviews_action from './../../actions/reviews_action';
import ReviewItem from './reviewItem';
import GroupedReviews from './GroupedReviews';
import WithLoading from './../hoc/loader_hoc';
import _ from 'underscore';


const ReviewsWithLoaderEnabled = WithLoading(ReviewItem);



class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentPage:1,
            filteredReviews :[]
        };

    }
 

  componentDidMount = () => {
    window.addEventListener('scroll', this.onScroll);
    this.SearchReviews(this.state.currentPage);  
  }

  componentWillUnmount = ()=> {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {


    var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight || window.innerHeight;
    var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom && this.props.hasMore) {
        this.SearchReviews(this.state.currentPage);
    }
  }

  SearchReviews = (page)=>{
    this.props.getReviews(page);
    this.setState({currentPage:this.state.currentPage+1})
  }

   renderReviews = (item,index,array)=>{
    
    if(this.props.groupedReviews)
    {
 
    
       return (  <div> {index}<GroupedReviews review = {item} /> </div>)
      
   
}

else {
    return (
      
        <ReviewsWithLoaderEnabled month = {index} isLoading = {this.props.isLoading} reviews = {item}/>
       
       )

     
}

    
   }

  

  render() {
  
    const reviewList = this.props;
    console.log(reviewList.filteredReviews);
    return (
      <div>
      
          { !_.isEmpty(reviewList.filteredReviews) || reviewList.matchFound  ?  _.map(reviewList.filteredReviews, this.renderReviews) :
            reviewList.reviewsList.map(this.renderReviews) 
        
        }
          
      </div>
    );
  }
}

Search.propTypes = {
  searchStr: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
  dispatch: PropTypes.func,
};

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ getReviews: reviews_action },
    dispatch);
}

function mapStateToProps(state) {
    return {
        reviewsList: state.searchReviews.reviews,
        filteredReviews: state.searchReviews.filteredReviews,
        hasMore : state.searchReviews.hasMore,
        isLoading : state.searchReviews.isFetching,
        matchFound : state.searchReviews.matchFound,
        groupedReviews : state.searchReviews.groupedReviews
      };
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);
