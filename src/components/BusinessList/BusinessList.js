import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

function BusinessList(props) {
  return (
    <div className="BusinessList">
      {props.businesses.map((business) => {
        return <Business business={business}/>
      })}
    </div>
  );
}

export default BusinessList;