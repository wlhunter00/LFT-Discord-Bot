require('dotenv').config();

const Discord = require('discord.js');
const { prefix, lft } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

// Listen for a message
client.on('message', message => {
    // Ignore bot messages
    if (message.author.bot) return;

    console.log(message.content);

    // Identify any LFT messages
    if (message.content.includes(lft)) {
        message.channel.send("LFT Message Found.");
    }

    // Bot commands
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        // Basic test command
        if (command === 'ping') {
            message.channel.send("Pong.");
        }

        // Arg test command
        else if (command === 'args-info') {
            if (!args.length) {
                return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
            }
            else if (args[0] === 'foo') {
                return message.channel.send('bar');
            }

            message.channel.send(`Command name: ${command}\nArguments: ${args}`);
        }

        // Command to retrieve avatars (not going to be used, but test of function)
        else if (command == 'avatar') {
            if (!args.length) {
                return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}`);
            }

            const avatarList = message.mentions.users.map(user => {
                return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}`;
            });

            message.channel.send(avatarList);
        }
    }
});

client.login(process.env.DISCORD_TOKEN);