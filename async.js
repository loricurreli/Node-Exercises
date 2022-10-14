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


  async function getResults(player){
    try
    {
      const results = await luckyDraw(player)
      console.log("Results: ", results)
    }
    catch(error){
        console.error(error)
    }
  }

  const Players = ["Tina","Jeorge","Julien"]

  Players.forEach((player) => getResults(player))
