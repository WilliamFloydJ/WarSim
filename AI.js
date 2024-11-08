const utils = require("./utilities.js");
const maps = require("./mapArray.json");
const soldiers = require("./soldiers.json");

const playMap = maps[0];
const emptyMap = maps[1];
let time = maps[2];

const xSoldiers = soldiers.filter((s) => s.side);
const oSoldiers = soldiers.filter((s) => s.side === false);

soldiers.forEach((sol) => {
  sol.newHistory = sol.newHistory + " ";
});

oSoldiers.forEach((sol) => {
  console.log(soldiers[0].position);
});

time++;

utils.exportJson(playMap, emptyMap, soldiers, time);
