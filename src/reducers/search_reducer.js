import {groupmonth,groupDay,groupweek,filterGroupedReviews,filterReviews} from './../Utils/Utils';
import _ from 'lodash';
var moment = require('moment');


let Initialstate = {
    isFetching: false,
    reviews: [],
    filteredReviews :{
        
    },
    matchFound : false,
    groupedReviews : false
}
const getReviewsStringSearch = (state = Initialstate, action) => {
    switch (action.type) {
        case "REQUEST_REVIEWS":
            return Object.assign({}, state, {
                isFetching: true,
            });

        case "RECIEVE_REVIEWS":

            return Object.assign({}, state, {
                reviews: state.reviews.concat(action.payload.response.reviews),
                hasMore: action.payload.response.hasMore,
                isFetching: false,
                matchFound:false,
                groupedReviews:false
            });

            case "SORT_NEWEST":
            return Object.assign({}, state, {
                filteredReviews: _.sortBy(state.reviews,(a)=>{
                    return moment(a.reviewCreated);
                }).reverse(),
                matchFound:true
            });
            case "GROUPBY_MONTH":

            return Object.assign({}, state, {
                filteredReviews: groupmonth(state.reviews),
                matchFound:true,
                groupedReviews: true
            });

            case "GROUPBY_DAY":

            return Object.assign({}, state, {
                filteredReviews: groupDay(state.reviews),
                matchFound:true,
                groupedReviews: true
            });

            case "GROUPBY_WEEK":

            return Object.assign({}, state, {
                filteredReviews: groupweek(state.reviews),
                matchFound:true,
                groupedReviews: true
            });


            case "SORT_OLDEST":
            return Object.assign({}, state, {
                filteredReviews: _.sortBy(state.reviews,(a)=>{
                    return moment(a.reviewCreated);
                }),
                matchFound:true
            });

            case "STARS":
            return Object.assign({}, state, {
                filteredReviews: state.reviews.filter((item)=>{return item.stars===action.value} ),
                matchFound:true
            });

        case "SEARCH":
        return Object.assign({}, state, {
            filteredReviews :  (()=>{ 
                if(state.groupedReviews)
               return filterGroupedReviews(state.filteredReviews,action.value) 
                else
               return filterReviews(state.reviews,action.value) 
            })(),
            matchFound : action.value ? true : false,
            
        });
            

        default:
            return state
    }
}

export default getReviewsStringSearch;
