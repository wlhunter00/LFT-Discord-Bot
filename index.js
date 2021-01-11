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
        const args = message.content.lastIndexOf(prefix.length).trim().split(' ');
    }

    if (message.content.startsWith(`${prefix}ping`)) {
        // Responding to messages
        message.channel.send("Pong.");
    }
    else if (message.content.startsWith(`${prefix}beep`)) {
        message.channel.send("Boop.");
    }
});

client.login(process.env.DISCORD_TOKEN);