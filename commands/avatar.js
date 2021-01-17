const { getUser } = require("../helper_functions/mentions");

module.exports = {
    name: 'avatar',
    description: 'Retrieve users avatar',
    requiredArgs: 0,
    usage: '<@user>(s)',
    channelOnly: false,
    cooldown: 5,
    aliases: ['icon', 'pfp'],

    execute(message, args) {
        if (!args.length || message.mentions.users.size < 1) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}`);
        }

        const user = getUser(args[0], message.client);
        return message.channel.send(`${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}`);
    }


}