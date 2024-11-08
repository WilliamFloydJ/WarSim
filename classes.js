module.exports = {
  Soldier: class Soldier {
    constructor(name, position, side, symbol) {
      this.name = name;
      this.position = position;
      this.side = side;
      this.symbol = symbol;
      this.history = "";
      this.newHistory = "";
      this.health = 100;
    }
  },
  Gun: class Gun {
    constructor(power, distance, speed, accuracy) {
      this.power = power;
      this.distance = distance;
      this.speed = speed;
      this.accuracy = accuracy;
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
