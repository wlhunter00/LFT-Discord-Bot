const getChannelFromMention = (mention, client) => {
    if (!mention) return;
    const matches = mention.match(/^<#?(\d+)>$/);
    if (!matches) return;
    const id = matches[1];
    return client.channels.cache.get(id);
}

const getUserFromMention = (mention, client) => {
    if (!mention) return;
    const matches = mention.match(/^<@!?(\d+)>$/);
    if (!matches) return;
    const id = matches[1];
    return client.users.cache.get(id);
}

exports.getChannel = getChannelFromMention;
exports.getUser = getUserFromMention;