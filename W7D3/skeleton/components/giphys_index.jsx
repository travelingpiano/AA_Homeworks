import React from 'react';

import GiphysIndexItem from './giphys_index_item';

const GiphysIndex = ({giphys}) => {
  const giphyslinks = [];
  for(let i = 0; i< giphys.length;i++){
    giphyslinks.push(giphys[i].images.fixed_height.url);
  }
  return (
    <ul>
      {giphyslinks.map((giphy,idx) => <GiphysIndexItem key={idx}  link={giphy} />)}
    </ul>
  );
};

export default GiphysIndex;
