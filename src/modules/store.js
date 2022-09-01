export default class StoreUI {
    static displayScoreList = (gameScore) => {
      const scoresList = document.querySelector('.scores-list');

      const scoreItem = document.createElement('li');
      scoreItem.classList.add('listed-score');
      scoreItem.dataset.id = gameScore.id;

      const scoreName = document.createElement('p');
      scoreName.classList.add('score-name');
      scoreName.textContent = `${gameScore.user}:`;

      const gameScoreItem = document.createElement('p');
      gameScoreItem.classList.add('listed-score');
      gameScoreItem.textContent = gameScore.score;

      scoresList.appendChild(scoreItem);
      scoreItem.appendChild(scoreName);
      scoreItem.appendChild(gameScoreItem);
    }
}