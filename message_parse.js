const { getGame } = require("./helper_functions/games");

const parseMessageFunction = (message) => {
  message.channel.send("LFT Message Found.");
  // console.log(message.content);

  const lowercaseMessage = message.content.toLowerCase();

  //is message still in paragraph or is it just giant string.
  //if still paragraph we can check for negatives in the lines
  //that they mention ranks to tell if they do or don't want these ranks

  //Want to get the array of ranks...might not be how you are supposed to use this function

  // Hard coded for now
  const hardCodedGame = 'valorant';

  const game = getGame(hardCodedGame);

  const arrRanks = game.ranks;

  for (const rank of arrRanks) {
    if (lowercaseMessage.includes(rank.name)) {
      console.log(rank.name);
    }
  }

  //Want to get the array of ranks...might not be how you are supposed to use this function

  const arrRoles = game.roles;

  for (const role of arrRoles) {
    if (lowercaseMessage.includes(role.name)) {
      console.log(role.name);
    }
  }
};

exports.parseMessage = parseMessageFunction;
//test to push
