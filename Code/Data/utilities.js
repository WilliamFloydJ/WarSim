const prettier = require("prettier");
const fs = require("fs");

const letters = "ABCDEFGHIJKLMNPQRSTUVWXYZ".split("");
const numbers = "123456789;{}/<>+~!@#$%^&*".split("");

function mapArray(Arr) {
  Arr.forEach((line) => {
    let lineLog = "";
    line.forEach((e) => {
      const colorL = letters.includes(e) ? "\x1b[31m" : "";
      const colorN = numbers.includes(e) ? "\x1b[34m" : "";
      const color = colorL ? colorL : colorN;
      lineLog = lineLog + color + e + "\x1b[0m" + " , ";
    });
    console.log(lineLog);
  });
}

function exportJson(newMap, mapArr, soldiers) {
  soldiers.forEach((sol) => {
    const { x, y } = sol.position;
    newMap[y][x] = sol.symbol;
  });

  const maps = [newMap, mapArr];

  mapArray(newMap);

  prettier
    .format(JSON.stringify(soldiers), { parser: "json" })
    .then((string) => {
      fs.writeFileSync("./Code/soldiers.json", string);
    });

  prettier.format(JSON.stringify(maps), { parser: "json" }).then((string) => {
    fs.writeFileSync("./Code/mapArray.json", string);
  });
}

module.exports = {
  letters: letters,
  numbers: numbers,
  exportJson: exportJson,
};
