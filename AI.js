const utils = require("./utilities.js");
const maps = require("./mapArray.json");

const playMap = maps[0];
const emptyMap = maps[1];
const soldiers = maps[2];
const xSoldiers = soldiers.filter((s) => s.side);
const oSoldiers = soldiers.filter((s) => s.side === false);

soldiers.forEach((sol) => {});

utils.exportJson(playMap, emptyMap, soldiers);
