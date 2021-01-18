const { getChannel } = require('../helper_functions/mentions');
const { regions } = require('../helper_functions/supportedRegions');

module.exports = {
    name: 'remove',
    description: 'Removes a LFT listener from a channel. If no channel is mentioned, then a listener will be removed from the channel posted in.',
    cooldown: 5,
    usage: '[#channel]',
    requiredArgs: 0,
    channelOnly: true,
    aliases: ['delete', 'remove_listener', 'removeListener', 'delete_listener', 'deleteListener'],
    permissions: 'MANAGE_CHANNELS',

    execute(message, args) {
        // Channel is either mentioned channel or the channel this was posted in
        const channel = getChannel(args[0], message.client) || message.channel;
        if (args[0] && channel === message.channel) {
            return message.channel.send(`${args[0]} is not a supported channel. Please include a # before the name of the channel you would like to add a listener to.`);
        }
        // TODO: Check to see if there is currently a listener on the channel. If there is not, then return

        const deleteData = {
            channelID: channel.id,
            serverID: channel.guild.id,
        }

        // Post request and handle the transaction

        // Success
        return message.channel.send(`An LFT listener has been removed on ${channel.name}..`);
        // Fail

    },
};