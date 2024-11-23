module.exports = {
  Soldier: class Soldier {
    constructor(name, position, side, symbol, history, newHistory, health) {
      this.name = name;
      this.position = position;
      this.side = side;
      this.symbol = symbol;
      this.history = history || "";
      this.newHistory = newHistory || "";
      this.health = health || 100;
    }

    move(map) {
      const length = map[0].length;
      const height = map.length;
      console.log([height, length]);
      //this.position = newPosition;
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

    distance(otherVector) {
      const vector = new Vector2(
        Math.abs(this.x) - Math.abs(otherVector.x),
        Math.abs(this.y) - Math.abs(otherVector.y)
      );
      return Math.max(vector.x, vector.y);
    }
  },
};
