import React from 'react';
import { Video } from 'modules/board/components';

const data = {
  name: 'Өвөлжөө (Mongolian version)',
  artist: 'Magnolian',
  ytUrl: 'https://www.youtube.com/watch?v=OLCpV2NZW9Y'
};

const VideoContainer = () => {
  return <Video data={data} />;
};

export default VideoContainer;
