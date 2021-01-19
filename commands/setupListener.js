const { getChannel } = require('../helper_functions/mentions');
const { regions } = require('../config.json');
const { getGame, getSupportedGameNames } = require('../helper_functions/games');
const { capitalizeFirstLetter } = require('../helper_functions/formatting');

module.exports = {
    name: 'setup',
    description: 'Sets a channel as a LFT channel. Please identify what game and region the channel is for. If no channel is mentioned, then a listener will be added to the channel posted in.',
    cooldown: 5,
    usage: '[NA|EU|OCE|ASIA] [game] [#channel]',
    requiredArgs: 2,
    channelOnly: true,
    aliases: ['listen', 'new', 'setupListener', 'setup_listener', 'add'],
    permissions: 'MANAGE_CHANNELS',

    execute(message, args) {
        // Channel is either mentioned channel or the channel this was posted in
        const channel = getChannel(args[2], message.client) || message.channel;
        if (args[2] && channel === message.channel) {
            return message.channel.send(`${args[2]} is not a supported channel. Please include a # before the name of the channel you would like to add a listener to.`);
        }

        // Check to see if the region is one we support
        const region = regions.find(region => (region.toLowerCase() === args[0].toLowerCase()));
        if (!region) {
            let reply = [`${args[0]} is not a supported region! Currently, the supported regions are: `];
            reply.push(regions.map(region => region).join(', '));
            return message.channel.send(reply, { split: true });
        }

        // Check to see if it is a supported game
        const game = getGame(args[1].toLowerCase());
        if (!game) {
            let reply = [`${args[1]} is not a supported game! Currently, the supported games are: `];
            const gameNames = getSupportedGameNames();
            reply.push(gameNames.map(game => game).join(', '));
            return message.channel.send(reply, { split: true });
        }

        // Then lookup to see if the game exists in our db
        // If it doesn't exist, return error message


        const postData = {
            channelID: channel.id,
            serverID: channel.guild.id,
            gameID: game.id,
            region: region,
        }
        console.log(postData);

        // Post request and handle the transaction

        // Sucess
        return message.channel.send(`A LFT listener has been added to ${channel.name}, for ${region} ${capitalizeFirstLetter(game.name)}. If this was a mistake, please !remove or !edit.`);
        // Fail

    },
};