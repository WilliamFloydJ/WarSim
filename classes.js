module.exports = {
  Soldier: class Soldier {
    constructor(name, position, side) {
      this.name = name;
      this.position = position;
      this.side = side;
    }
  },
  Vector2: class Vector2 {
    constructor(x, y) {
      this.x = x || 0;
      this.y = y || 0;
    }

    add(otherVector) {
      return new Vector2(this.x + otherVector.x, this.y + otherVector.y);
    }

    subtract(otherVector) {
      return new Vector2(this.x - otherVector.x, this.y - otherVector.y);
    }
  },
};
