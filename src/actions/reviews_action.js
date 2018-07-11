import axios from 'axios';



const ROOT_URL = 'https://sellics-frontend-test.herokuapp.com';


function requestReviews() {
  return {
    type: "REQUEST_REVIEWS",
    payload: { isfetching: true }
  };
}

export function searchReviews(value) {
    return {type: "SEARCH", value};
  }

  export function SortReviews_Newest(value) {
    return {type: "SORT_NEWEST", value};
  }

  export function SortReviews_Oldest(value) {
    return {type: "SORT_OLDEST", value};
  }

  export function getReviewsByStars(value) {
    return {type: "STARS", value};
  }

  export function reviewsGroupByMonth(value) {
    return {type: "GROUPBY_MONTH", value};
  }

  export function reviewsGroupByDay(value) {
    return {type: "GROUPBY_DAY", value};
  }

  export function reviewsGroupByWeek(value) {
    return {type: "GROUPBY_WEEK", value};
  }



export default function fetchReviews(page) {
  return function (dispatch) {
    dispatch(requestReviews());
    axios.get(`/reviews/${page}`)
      .then(response => {
        dispatch({
          type: "RECIEVE_REVIEWS",
          payload: { response: response.data, isfetching: false }
        });
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
      });
  }
}