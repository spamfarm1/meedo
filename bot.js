const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("560833206497181698")
setInterval(function() {
channel.send(`ميدو نوريدو ميدو نوريدو ميدو نوريدو ميدو نوريدو ميدو نوريدو ميدو نوريدو ميدو نوريدو ميدو نوريدو ميدو نوريدو ميدو نوريدو ميدو نوريدو`);
}, 30)
})

client.login(process.env.BOT_TOKEN);