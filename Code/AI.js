const { Soldier } = require("./Data/classes.js");
const utils = require("./Data/utilities.js");
const maps = require("./mapArray.json");
const soldiers = require("./soldiers.json");

const playMap = maps[0];
const emptyMap = maps[1];

const newSoldiers = [];
const xSoldiers = soldiers.filter((s) => s.side);
const oSoldiers = soldiers.filter((s) => s.side === false);

soldiers.forEach((sol) => {
  const newSolder = new Soldier(
    sol.name,
    sol.position,
    sol.side,
    sol.symbol,
    sol.history,
    sol.newHistory,
    sol.health
  );
  newSoldiers.push(newSolder);
});

newSoldiers.forEach((sol) => {
  //sol.newHistory = sol.newHistory + " ";
  //sol.move(playMap);
});

oSoldiers.forEach((sol) => {
  console.log(sol.position);
});

utils.exportJson(playMap, emptyMap, soldiers);
