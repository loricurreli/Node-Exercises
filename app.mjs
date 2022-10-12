import * as fs from 'node:fs/promises'

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}


luckyDraw("Joe")
.then((result) => console.log(result))
.catch((e) => console.log(e))
.then(() => luckyDraw("Caroline"))
.then((result) => console.log(result))
.catch((e) => console.log(e))
.then(() => luckyDraw("Sabrina"))
.then((result) => console.log(result))
.catch((e) => console.log(e))