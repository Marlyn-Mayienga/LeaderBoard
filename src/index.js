import './styles.css';
import StoreUI from './modules/store.js';
import ApiScore from './modules/apiscores.js';

const init = async () => {
  const scores = await ApiScore.getScores();

  const scoresList = document.querySelector('.scores-list');
  scoresList.replaceChildren();

  scores.forEach((score) => StoreUI.displayScoreList(score));
};

init();

const user = document.getElementById('name-input');
const score = document.getElementById('score-input');

const form = document.getElementById('form');

const handleSubmit = async (e) => {
  e.preventDefault();
  await ApiScore.submitScore(user.value, Number(score.value));
  init();
};

form.addEventListener('submit', handleSubmit);