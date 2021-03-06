const Discord = require("discord.js");
const prefixs = require("../data/prefixs.json");

exports.run = async (client,message,args)=>{
    const prefix = prefixs[message.guild.name];
    const embed = new Discord.RichEmbed();
    embed.setTitle("List of Commands 📋");
    embed.setColor([255,90,0]);
    embed.addField(prefix + "avatar @mention","🎴 Gives you a link with his avatar",false);
    embed.addField(prefix + "come @mention","🤙 Informs one or more server members that you are waiting for them in one of the voice channels",false);
    embed.addField(prefix + "default [name/id]","🗓️ Sets the channel where the bot posts memes daily.");
    embed.addField(prefix + "meme","🚧 To get a random meme from a huge collection",false);
    embed.addField(prefix + "ping","🏓 Starts a crazy ping-pong game",false);
    embed.addField(prefix + "porn [input]","🔞 To get a random porn gif based on the input",false);
    embed.addField(prefix + "prefix","🏷️ Lets you change the default prefix",false);
    embed.addField("@Keystone","💡 If you ever forget the bot prefix, just mention it!",false);
    embed.setTimestamp(new Date());
    embed.setFooter("Automated message", "https://i.imgur.com/5Px5FeR.png");
    message.channel.send(embed);
};