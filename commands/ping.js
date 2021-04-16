module.exports = {
    name: 'ping',
    permissions: [],
    description: "ping/test command",
    execute(client, message, args){
        message.channel.send('pong!');
    }
}