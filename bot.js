const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("590160697397346305")
setInterval(function() {
channel.send(`انا حزززززززززززززززززين ;(`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
