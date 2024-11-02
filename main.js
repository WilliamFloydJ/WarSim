const utils = require("./utilities.js");
const names = require("./first-names.json");
const { Soldier, Vector2, Gun } = require("./classes.js");

const mapArr = [];
const areaLength = 6;
const areaHeight = areaLength + 3;
for (let y = 0; y < areaHeight; y++) {
  mapArr.push([]);
  for (let x = 0; x < areaLength; x++) {
    mapArr[y].push("_");
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const guns = [];

const rifle = new Gun(5, 4, 1, 0.5);

const soldiers = [];

function createSoldier(side) {
  const name = names[Math.floor(Math.random() * names.length)];
  const symbolAr = side ? utils.letters : utils.numbers;
  let symbol = symbolAr[Math.floor(Math.random() * symbolAr.length)];

  while (soldiers.some((sold) => sold.symbol === symbol)) {
    symbol = symbolAr[Math.floor(Math.random() * symbolAr.length)];
  }

  let position = new Vector2(
    getRandomInt(areaLength),
    getRandomInt(areaHeight)
  );
  while (soldiers.some((sold) => sold.position === position)) {
    position = new Vector2(getRandomInt(areaLength), getRandomInt(areaHeight));
  }
  const newSolder = new Soldier(name, position, side, symbol);
  soldiers.push(newSolder);
}

for (let i = 0; i < 10; i++) {
  createSoldier(true);
}
for (let i = 0; i < 10; i++) {
  createSoldier(false);
}

const newMap = structuredClone(mapArr);

utils.exportJson(newMap, mapArr, soldiers);
