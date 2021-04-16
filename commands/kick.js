module.exports = {
    name: 'kick',
    permissions: ["KICK_MEMBERS"],
    description: "kicks a selected member",
    execute(client, message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("User has successfully been kicked.");
        } else{
            message.channel.send('You cant kick that member, sorry.');
        }
    }
}