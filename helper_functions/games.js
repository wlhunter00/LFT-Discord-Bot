const fs = require('fs');

// Scan game files to get all the game objects
const gameFiles = fs.readdirSync('game_objects').filter(file => file.endsWith('.js'));
let games = [];
for (const file of gameFiles) {
    const game = require(`../game_objects/${file}`);
    games.push(game);
}

// Returns all game objects in array
const getAllGames = () => {
    return (games);
}

// Returns specific game object
const getGame = (gameName) => {
    for (const game of games) {
        if (game.name === gameName) return game;
    }
    return undefined;
}

// Returns a game's ranking system
const getRanks = (gameName) => {
    for (const game of games) {
        if (game.name === gameName) return game.ranks;
    }
    return undefined;
}

// Returns a game's roles
const getRoles = (gameName) => {
    for (const game of games) {
        if (game.name === gameName) return game.roles;
    }
    return undefined;
}

// Returns a game's characters
const getCharacters = (gameName) => {
    for (const game of games) {
        if (game.name === gameName) return game.characters;
    }
    return undefined;
}

const getGameByID = (id) => {
    if (id === parseInt(id, 10))
        id = id.toString();

    for (const game of games) {
        if (game.id === id) return game;
    }
    return undefined;
}

const getGameID = (gameName) => {
    for (const game of games) {
        if (game.name === gameName) return game.id;
    }
    return undefined;
}

const getSupportedGameNames = () => {
    let gameNames = [];
    for (const game of games) {
        gameNames.push(game.name);
    }
    return gameNames;
}

const getAllGameIDs = () => {
    let gameIDs = [];
    for (const game of games) {
        gameIDs.push(game.id);
    }
    return gameIDs;
}

exports.getAllGames = getAllGames;
exports.getGame = getGame;
exports.getRanks = getRanks;
exports.getRoles = getRoles;
exports.getCharacters = getCharacters;
exports.getGameByID = getGameByID;
exports.getGameID = getGameID;
exports.getSupportedGameNames = getSupportedGameNames;
exports.getAllGameIDs = getAllGameIDs;