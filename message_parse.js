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
  const hardCodedGame = "valorant";
  const game = getGame(hardCodedGame);

  //ranks
  const arrRanks = game.ranks;
  const rankArray = [];
  for (const rank of arrRanks) {
    if (lowercaseMessage.includes(rank.name)) {
      rankArray.push(rank.name);
    }
  }

  //roles
  //"can rifle" is in one of the LFTs not sure if that is a role because it is in that section
  const arrRoles = game.roles;
  const roleArray = [];
  for (const role of arrRoles) {
    if (lowercaseMessage.includes(role.name)) {
      roleArray.push(role.name);
    } else {
      const arrAlias = role.aliases;
      for (const alias of arrAlias) {
        if (
          lowercaseMessage.includes(" " + alias + " ") ||
          lowercaseMessage.includes(" " + alias + ",")
        ) {
          roleArray.push(role.name);
        }
      }
    }
  }

  //characters
  //sage isn't in the character list...I see that in an LFT not sure if it is really a character
  const arrChar = game.characters;

  const characterArray = [];
  for (const char of arrChar) {
    if (lowercaseMessage.includes(char.name)) {
      characterArray.push(char.name);
    } else {
      const arrAlias = char.aliases;
      for (const alias of arrAlias) {
        if (
          lowercaseMessage.includes(" " + alias + " ") ||
          lowercaseMessage.includes(" " + alias + ",")
        ) {
          characterArray.push(char.name);
        }
      }
    }
  }

  //printing info
  let printObj = { ranks: rankArray, roles: roleArray, chars: characterArray };
  let i = 0;
  if (printObj.ranks.length == 0) {
    console.log("No ranks");
  } else {
    console.log("Ranks are: " + printObj.ranks);
  }
  if (printObj.roles.length == 0) {
    console.log("No roles");
  } else {
    console.log("Roles are: " + printObj.roles);
  }
  if (printObj.chars.length == 0) {
    console.log("No characters");
  } else {
    console.log("Characters are: " + printObj.chars);
  }
};

exports.parseMessage = parseMessageFunction;
//test to push
