const parseMessageFunction = (message) => {
    message.channel.send("LFT Message Found.");
    console.log(message.content);
}

exports.parseMessage = parseMessageFunction;