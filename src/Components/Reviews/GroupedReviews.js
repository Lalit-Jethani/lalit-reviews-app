import React from "react";
import _ from "lodash";
import ReviewItem from "./reviewItem";

const GroupedReviews = props => {
  return _.map(props.review, (items, index, arr) => {
    return <ReviewItem reviews={items} />;
  });
};

export default GroupedReviews;
