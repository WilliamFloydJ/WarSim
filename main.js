const fs = require("fs");
const utils = require("./utilities.js");
const prettier = require("prettier");
const { Soldier, Vector2 } = require("./classes.js");

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

const soldiers = [];

function createSoldier(name, side) {
  let position = new Vector2(
    getRandomInt(areaLength),
    getRandomInt(areaHeight)
  );
  while (soldiers.some((sold) => sold.position === position)) {
    position = new Vector2(getRandomInt(areaLength), getRandomInt(areaHeight));
  }
  const newSolder = new Soldier(name, position, side);
  soldiers.push(newSolder);
}

for (let i = 0; i < 10; i++) {
  createSoldier(i, true);
}
for (let i = 0; i < 10; i++) {
  createSoldier(i, false);
}

const newMap = structuredClone(mapArr);

utils.exportJson(newMap, mapArr, soldiers);
