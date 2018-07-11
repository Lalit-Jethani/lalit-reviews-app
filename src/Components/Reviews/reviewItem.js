import React from 'react';
import StarRatings from 'react-star-ratings';
import _ from 'lodash';
var moment = require('moment');


const Reviews = (props) => {



    return (
       

  
 <div className="reviewContainer top-buffer">
          
          <div className="topRowReviews padding-buffer">
     
          <div className="oneThird">
               <div>
                DATE
                </div>
           
             <div className = "GraySmallFont">
                 {moment(props.reviews.reviewCreated).format('dddd, MMMM Do, YYYY')}
              </div>
     
              </div>
             
              <div className="oneThird">
            <div>
                STAR
                </div>
           
            <div>
              {<StarRatings  rating={props.reviews.stars}
             starDimension="15px"
             starSpacing="1px"/>}
              </div>
     
              </div>
            
              <div className="oneThird">
            <div>
                {props.reviews.childAsin}
                </div>
            
            <div className = "GraySmallFont">
              {props.reviews.productTitle}
              </div>
              </div>
              </div>
           
     
           <div className="padding-buffer">
                Review Title
                </div>
              <div className = "GraySmallFont" style={{paddingLeft:20, paddingBottom:10}}>
              {props.reviews.content}
              </div>
     
              </div>
        );

           
       
  
}

export default Reviews;