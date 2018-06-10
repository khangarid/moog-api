import React from 'react';
import { Board } from 'modules/board/components';

const data = [
  {
    name: "Don't Stop",
    artist: 'Uka feat. DJ Zaya',
    ytUrl: 'https://www.youtube.com/watch?v=OLCpV2NZW9Y'
  },
  {
    name: 'Mi Senti',
    artist: 'Хишигдалай feat. Naki',
    ytUrl: 'https://www.youtube.com/watch?v=ZBN93xJYAYY'
  },
  {
    name: 'Чи надад дурлаасай',
    artist: 'Болд',
    ytUrl: 'https://www.youtube.com/watch?v=OLCpV2NZW9Y'
  }
];

const BoardContainer = () => {
  return <Board list={data} />;
};

export default BoardContainer;
