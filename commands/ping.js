module.exports = {
    name: 'ping',
    description: 'Test the bot',
    execute(message, args) {
        message.channel.send('Pong.');
    }
}