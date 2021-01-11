require('dotenv').config();

const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

// Listen for a message
client.on('message', message => {
    console.log(message.content);

    if (message.content === "!ping") {
        // Responding to messages
        message.channel.send("Pong.");
    }
});

client.login(process.env.DISCORD_TOKEN);