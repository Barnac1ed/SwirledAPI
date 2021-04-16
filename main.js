const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
})

client.on("ready", () =>{
  client.user.setActivity('Over 11 Servers | s?help', { type: "WATCHING"})
})    

client.login('NzkyNjA2MjgyOTkzMjM4MDE2.X-gKHw.PDLnNp598M683ywONcTTh5NJfUQ');