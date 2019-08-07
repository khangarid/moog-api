import React from 'react';
import { Board } from 'modules/board/components';

const data = [
  {
    name: "Don't Stop",
    artist: 'Uka feat. DJ Zaya',
    ytUrl: 'https://www.youtube.com/watch?v=VgXOPeobPcI', ytVideoId: 'VgXOPeobPcI'
  },
  {
    name: 'Mi Senti',
    artist: 'Хишигдалай feat. Naki',
    ytUrl: 'https://www.youtube.com/watch?v=ZBN93xJYAYY', ytVideoId: 'VgXOPeobPcI'
  },
  {
    name: 'Чи надад дурлаасай',
    artist: 'Болд',
    ytUrl: 'https://www.youtube.com/watch?v=VgXOPeobPcI', ytVideoId: 'VgXOPeobPcI'
  },
  {
    name: 'Odoo',
    artist: 'Lil Thug E',
    ytUrl: 'https://www.youtube.com/watch?v=VgXOPeobPcI', ytVideoId: 'VgXOPeobPcI'
  },
  {
    name: 'WITH YOU',
    artist: 'TSETSE ft. NMN',
    ytUrl: 'https://www.youtube.com/watch?v=VgXOPeobPcI', ytVideoId: 'VgXOPeobPcI'
  },
  {
    name: '1 2 3',
    artist: 'NAMONE ft. BIL G',
    ytUrl: 'https://www.youtube.com/watch?v=VgXOPeobPcI', ytVideoId: 'VgXOPeobPcI'
  },
  {
    name: 'Өвөлжөө (Mongolian version)',
    artist: 'Magnolian',
    ytUrl: 'https://www.youtube.com/watch?v=VgXOPeobPcI', ytVideoId: 'VgXOPeobPcI'
  },
  {
    name: 'Hamtdaa',
    artist: 'TATAR & Maraljingoo',
    ytUrl: 'https://www.youtube.com/watch?v=VgXOPeobPcI', ytVideoId: 'VgXOPeobPcI'
  },
  {
    name: 'Чамд үлдээе',
    artist: 'Choi Joo',
    ytUrl: 'https://www.youtube.com/watch?v=VgXOPeobPcI', ytVideoId: 'VgXOPeobPcI'
  },
  {
    name: 'СҮҮН ДАЛАЙ ЭЭЖ',
    artist: 'Б.Аззаяа',
    ytUrl: 'https://www.youtube.com/watch?v=VgXOPeobPcI', ytVideoId: 'VgXOPeobPcI'
  },
  {
    name: 'WITH YOU',
    artist: 'TSETSE ft. NMN',
    ytUrl: 'https://www.youtube.com/watch?v=VgXOPeobPcI', ytVideoId: 'VgXOPeobPcI'
  },
  {
    name: '1 2 3',
    artist: 'NAMONE ft. BIL G',
    ytUrl: 'https://www.youtube.com/watch?v=VgXOPeobPcI', ytVideoId: 'VgXOPeobPcI'
  },
  {
    name: 'Өвөлжөө (Mongolian version)',
    artist: 'Magnolian',
    ytUrl: 'https://www.youtube.com/watch?v=VgXOPeobPcI', ytVideoId: 'VgXOPeobPcI'
  }
];

const BoardContainer = () => {
  return <Board list={data} />;
};

export default BoardContainer;
