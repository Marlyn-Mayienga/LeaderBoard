import './styles.css';
import STORE from './modules/store.js';

const { v4: uuidv4 } = require('uuid');

const pieces = [
  {
    name: 'Merlin',
    score: '200',
    id: uuidv4(),
  },

  {
    name: 'Malea',
    score: '120',
    id: uuidv4(),
  },

  {
    name: 'Marilyn',
    score: '530',
    id: uuidv4(),
  },
];

const init = () => {
  pieces.forEach((piece) => STORE.getScoreList(piece));
};

init();