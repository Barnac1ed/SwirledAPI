module.exports = {
    name: 'ban',
    permissions : ["BAN_MEMBERS"],
    description: "bans a selected member",
    execute(client, message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send("The user \`${memberTarger}\`` has successfully been banned.");
        } else{
            message.channel.send('You cant ban that member, sorry.');
        }
    }
}