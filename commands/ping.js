module.exports = {
    name: 'ping',
    description: 'Test the bot',
    requiredArgs: 0,
    channelOnly: false,
    cooldown: 3,
    aliases: ['pong'],

    execute(message) {
        message.channel.send('Pong.');
    }
}