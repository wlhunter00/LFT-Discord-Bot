module.exports = {
    name: 'avatar',
    description: 'Retrieve users avatar',
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}`);
        }

        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}`;
        });

        message.channel.send(avatarList);
    }
}