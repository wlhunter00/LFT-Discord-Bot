require('dotenv').config();

const fs = require('fs');
const Discord = require('discord.js');
const { prefix, lft } = require('./config.json');
const client = new Discord.Client();

// Importing commands from folder
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Login to the bot client
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
        const commandName = args.shift().toLowerCase();

        if (!client.commands.has(commandName)) return;

        const command = client.commands.get(commandName);

        if (command.requiredArgs && !args.length) {
            let reply = `You didn't provide any arguments, ${message.author}!`;

            if (command.usage) {
                reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
            }

            return message.channel.send(reply);
        }

        try {
            command.execute(message, args);
        }
        catch (err) {
            console.error(err);
            message.reply(`there was an error of ${err} with the command of ${commandName}`);
        }
    }
});

client.login(process.env.DISCORD_TOKEN);