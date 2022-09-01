const { v4: uuidv4 } = require('uuid');

export default class PIECE {
  constructor(name, score) {
    this.name = name;
    this.score = score;
    this.id = uuidv4();
  }
}