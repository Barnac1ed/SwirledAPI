module.exports = {
    name: 'purge',
    permissions: ["MANAGE_MESSAGES"],
    description: "Clears a certain amount of messages",
    async  execute(client, message, args) {
        if (!args[0]) return message.reply("Please enter the amount of messages you want to clear AFTER the purge command (e.g. s!purge 3).");
 
        if(isNaN(args[0])) return message.reply("Please use only numbers!");
 
        if(args[0] > 100) return message.reply("You can only clear up to 100 messages!");
        
        if(args[0] < 1) return message.reply("You have to clear at least 1 message, dummy!");
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
 
 }
}   