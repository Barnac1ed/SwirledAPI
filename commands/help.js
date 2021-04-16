module.exports = {
    name: 'help',
    permissions: [],
    description: "get's help",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#CCCC00')
        .setTitle('Commands')
        .setDescription('The prefix is s?')
        .addFields(
            {name: 'mee6', value: 'Shows Mee6 Premiums True Form...'},
            {name: 'ping', value: 'Sends Ping In Chat. Mostly Used By My Owner to Check That I Am Working.'},
            {name: 'purge (number)', value: 'Clears the Amount of Messages That You Type In. You Replace the (number) part with the amount of messages that you want to clear.'},
            {name: 'help', value: 'This Message!'},
            {name: 'ban (mention user)', value: 'Bans the Mentioned User'},
            {name: 'kick (mention user)', value: 'Kicks the Mentioned User'}
        )
        
        message.channel.send(newEmbed);
    }
}