import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect} from 'react-redux';
import SearchInput from './../Search/searchInput';
import GroupBy from './../Search/Groupby'; 
import { bindActionCreators } from "redux";
import StarRatings from 'react-star-ratings';
import {Button} from 'react-bootstrap';
import ReviewList from './../Reviews/ReviewList'
import fetchReviews,{searchReviews,
    SortReviews_Newest,SortReviews_Oldest,
     getReviewsByStars,reviewsGroupByMonth,reviewsGroupByDay,
     reviewsGroupByWeek }  from './../../actions/reviews_action';



class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        textvalue : '',
        rating : 4
    }

    
  }

  componentDidMount() {
     

  }

  onSelectOrderBy = (selectedOrder) =>{
   if(selectedOrder==="Oldest")   
   this.props.SortReviews_Oldest(selectedOrder);
   if(selectedOrder==="Newest")   
   this.props.SortReviews_Newest(selectedOrder);

   if(selectedOrder==="GroupByMonth")   
   this.props.reviewsGroupByMonth(selectedOrder);

   if(selectedOrder==="GroupByDay")   
   this.props.reviewsGroupByDay(selectedOrder);

   if(selectedOrder==="GroupByweek")   
   this.props.reviewsGroupByWeek(selectedOrder);
   
  }

  changeRating = ( newRating, name ) =>{
    this.props.getReviewsByStars(newRating);
    this.setState({
        rating: newRating
      });
  
  }

  refreshReviews = () =>{
    window.location.reload()
  }

  handleChange = (value) => {
    this.setState({textvalue:value})  
   this.props.searchReviews(value);
  }

  render = () => {
    const OrderbyFilters = [{text:'Newest',value:'Newest'}, {text:'Oldest', value:'Oldest'}];
    const GroupbyFilters = [{text:'GroupByweek',value:'GroupByweek'}, {text:'GroupByMonth', value:'GroupByMonth'},{text:'GroupByDay', value:'GroupByDay'}]
    return (
      <div className="container-fluid filterContainer">
      <div className = "row top-buffer">
      <div className="col-xs-12 col-md-5">
        <SearchInput value = {this.state.textvalue} onChange={this.handleChange} />
        </div>
        </div>
        <div className = "row top-buffer">
        <div className="col-xs-6 col-md-2">
        <GroupBy onSelectOrderBy = {this.onSelectOrderBy} options = {GroupbyFilters} />
        </div>
        <div className="col-xs-6 col-md-2 col-md-offset-1">
        <GroupBy onSelectOrderBy = {this.onSelectOrderBy} options = {OrderbyFilters} />
        </div>
        </div>
        <div className = "row top-buffer">
       
        </div>
        <div className="row top-buffer">
        <div className="col-xs-6 col-md-3">
         FILTER BY 
         </div>
         </div>
        <div className = "row "> 
       
        <div className="col-xs-6 col-md-3">
        <StarRatings
          rating={this.state.rating}
          starRatedColor="#2e6da4"
          changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
        />
        </div>
        </div>
        <div className="row">
        <div className="col-xs-6 col-md-3 col-md-offset-9">
      <Button className="btnAll" onClick = {this.refreshReviews} bsStyle="primary">Refresh</Button>
      </div>
      </div>
        <ReviewList />
      </div>
    );
  }
}

AppContainer.propTypes = {
  searchStr: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
  dispatch: PropTypes.func,
};

function mapDispatchToProps(dispatch) {

    return bindActionCreators({ searchReviews: searchReviews, SortReviews_Oldest:SortReviews_Oldest,
        SortReviews_Newest:SortReviews_Newest,
        getReviewsByStars:getReviewsByStars,fetchReviews:fetchReviews,reviewsGroupByMonth:reviewsGroupByMonth,
        reviewsGroupByDay:reviewsGroupByDay,reviewsGroupByWeek:reviewsGroupByWeek
      },
      dispatch);
  }



export default connect(null, mapDispatchToProps)(AppContainer);
