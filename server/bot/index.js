const Discord = require('discord.js');
require('dotenv').config();

const commands = require('./commands.js');

const client = new Discord.Client();
client.login(process.env.BOT_KEY);

const trigger = '?';

client.on('message', (msg) => {
  if (msg.author.bot) {  //  If message was sent by bot -> ignore
    return;
  }
  if (!msg.content.startsWith(trigger)) {  //  If message does not start with trigger -> ignore
    return;
  }

  const msgBody = msg.content.slice(trigger.length);
  const args = msgBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'help') {
    msg.channel.send({embed: {
      color: 3447003,
      title: 'Generate an Orc Name',
      fields: [
        { name: 'Command', value: '?help\n?name', inline: true},
        { name: 'Description', value: 'Lists Commands\nGenerates a new Orc name', inline: true}
      ]
    }});
  }

  if (command === 'name') {
    msg.reply(`Your Orc name is: '${commands.genOrcName()}'`);
  }
});
