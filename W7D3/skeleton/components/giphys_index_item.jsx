import React from 'react';

const GiphysIndexItem = ({link}) => {
  return (
    <li className="giphy-li">
      <img src={`${link}`}></img>
    </li>
  );
};

export default GiphysIndexItem;
