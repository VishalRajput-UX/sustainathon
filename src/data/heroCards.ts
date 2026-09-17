import imgMain1 from '../assets/images/main1.jpg';
import imgMain2 from '../assets/images/main2.jpg';
import imgWin from '../assets/images/win.jpg';
import imgMain3 from '../assets/images/main3.jpg';
import imgMain4 from '../assets/images/main4.jpg';

export const heroCards = [
  {
    id: 1,
    tag: '#ClimateTech',
    title: 'A CLEANER\nPLANET',
    image: imgMain1,
    rotation: -12,
    yOffset: 30,
    zIndex: 1,
    size: 'small', // approx 280x200
  },
  {
    id: 2,
    title: 'SMARTER\nSOLUTIONS',
    image: imgMain2,
    rotation: -6,
    yOffset: 10,
    zIndex: 2,
    size: 'medium', // approx 340x240
  },
  {
    id: 3,
    tag: '#SustainAthon2.0',
    title: '',
    image: imgWin,
    rotation: 0,
    yOffset: 0,
    zIndex: 3,
    size: 'large', // approx 420x280
  },
  {
    id: 4,
    title: 'BRIGHTER\nTOMORROW',
    image: imgMain3,
    rotation: 6,
    yOffset: 15,
    zIndex: 2,
    size: 'medium', 
  },
  {
    id: 5,
    tag: '#BuildWhatNext',
    title: 'BOLDER\nTOGETHER',
    image: imgMain4,
    rotation: 12,
    yOffset: 35,
    zIndex: 1,
    size: 'small',
  }
];
