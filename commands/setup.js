const { getChannel } = require('../helper_functions/mentions');
const { regions } = require('../helper_functions/supportedRegions');

module.exports = {
    name: 'setup',
    description: 'Sets a channel as a LFT channel. Please identify what game and region the channel is for.',
    cooldown: 5,
    usage: '[game] [NA|EU|OCE|ASIA] [#channel]',
    requiredArgs: 2,
    channelOnly: true,
    aliases: ['listener', 'listen'],
    permissions: 'MANAGE_CHANNELS',

    execute(message, args) {
        // TODO: Need to check if it is a supported game
        const game = args[0].toLowerCase();

        // Check to see if the region is one we support
        const region = regions.find(region => (region.toLowerCase() === args[1].toLowerCase()));
        if (!region) {
            let reply = [`${args[1]} is not a supported region! Currently, the supported regions are: `];
            reply.push(regions.map(region => region).join(', '));
            return message.channel.send(reply, { split: true });
        }

        // Channel is either mentioned channel or the channel this was posted in
        const channel = getChannel(args[2], message.client) || message.channel;

        // Then lookup to see if the game exists in our db
        // If it doesn't exist, return error message


        const postData = {
            channelID: channel.id,
            serverID: channel.guild.id,
            game: game,
            region: region,
        }

        // Post request and handle the transaction

        // Sucess
        return message.channel.send(`A LFT listener has been added to ${channel.name}, for ${region} ${game}. If this was a mistake, please !remove or !edit.`);
        // Fail

    },
};