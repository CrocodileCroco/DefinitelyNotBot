const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'rageux') {
    	message.reply('je suis literallement en trains de rire sur ta face');
  	}
});

client.on('message', message => {
    if (message.content === 'croco') {
    	message.reply('oui? si c pour me provoquer je te dit retourne dans ton coin caillou , si c l inverse dit toi quil a pas vraiment le temps de parler');
  	}
});

client.on('message', message => {
    if (message.content === 'troll') {
    	message.reply('morsay et cortex cest du troll non professionel tout comme TOI');
  	}
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
