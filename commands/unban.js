// NOTE: This command DOES NOT work as of now.

module.exports = {
    name: 'unban',
    permissions : ["BAN_MEMBERS"],
    description: "Unbans a selected member",
    execute(client, message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.unban();
            message.channel.send("The user \`${memberTarger}\`` has successfully been unbanned.");
        } else{
            message.channel.send('You cant unban that member, sorry.');
        }
    }
}