const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const GAME_ID = 'o8PzkEk5k1rJ2gENlqhH';

class ApiScore {
  static async submitScore(user, score) {
    await fetch(`${BASE_URL}games/${GAME_ID}/scores`,
      {
        method: 'POST',
        body: JSON.stringify({
          user,
          score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
  }

  static async getScores() {
    const response = await fetch(`${BASE_URL}games/${GAME_ID}/scores`);
    const data = await response.json();
    return data.result;
  }
}
export default ApiScore;