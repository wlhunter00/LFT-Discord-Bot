module.exports = {
    name: 'ping',
    description: 'Test the bot',
    requiredArgs: false,
    channelOnly: false,
    execute(message) {
        message.channel.send('Pong.');
    }
}