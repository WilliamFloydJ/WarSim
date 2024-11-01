const prettier = require("prettier");
const fs = require("fs");

function exportJson(newMap, mapArr, soldiers) {
  soldiers.forEach((sol) => {
    const { x, y } = sol.position;
    if (sol.side) {
      newMap[y][x] = "O";
    } else {
      newMap[y][x] = "X";
    }
  });

  const maps = [newMap, mapArr, soldiers];

  const prettyJson = prettier
    .format(JSON.stringify(maps), { parser: "json" })
    .then((string) => {
      fs.writeFileSync("mapArray.json", string);
    });
}

module.exports = {
  exportJson: exportJson,
};
