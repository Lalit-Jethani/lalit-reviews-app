import React from 'react';
import Loader from './../Loader/Loader';
import PropTypes from 'prop-types';

function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {

    WihLoadingComponent.propTypes = {
      isLoading: PropTypes.bool
    };

    if (!isLoading)
      return (<Component  { ...props} />);
    else {

      return (
        <div>
              
               <Loader />
               <Component  { ...props} />
      
       
        </div>
    );
    }

  };
}

export default WithLoading;