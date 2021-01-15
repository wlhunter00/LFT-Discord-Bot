module.exports = {
    name: 'ping',
    description: 'Test the bot',
    requiredArgs: false,
    channelOnly: false,
    cooldown: 3,
    aliases: ['pong'],

    execute(message) {
        message.channel.send('Pong.');
    }
}