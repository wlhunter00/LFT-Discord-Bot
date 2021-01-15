module.exports = {
    name: 'args-info',
    description: 'Argument test command',
    requiredArgs: true,
    usage: 'foo',
    channelOnly: true,
    execute(message, args) {
        if (args[0] === 'foo') {
            return message.channel.send('bar');
        }

        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    }
}