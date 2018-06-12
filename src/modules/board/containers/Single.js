import React from 'react';
import { Single } from 'modules/board/components';

const data = {
  name: 'Өвөлжөө (Mongolian version)',
  artist: 'Magnolian',
  ytUrl: 'https://www.youtube.com/watch?v=OLCpV2NZW9Y'
};

const SingleContainer = () => {
  return <Single data={data} />;
};

export default SingleContainer;
