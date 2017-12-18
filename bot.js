const Discord = require('discord.js');
const client = new Discord.Client();
let date = new Date();
let current_hour;
let reponse;

client.on('ready', () => {
    console.log('I am ready!');
});

// juste envoyer
client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

//répondre à la personne
client.on('message', message => {
	switch (message.content) {
		case 'bing':
			reponse = 'BONG!'
			break;
		case 'rageux':
			reponse = 'je suis literallement en trains de rire sur ta face'
			break;
		case 'croco':
			reponse = 'oui? si c pour me provoquer je te dit retourne dans ton coin caillou , si c l inverse dit toi quil a pas vraiment le temps de parler'
			break;
		case 'troll':
			reponse = 'morsay et cortex cest du troll non professionel tout comme TOI'
			break;
		case 'horloge':
			current_hour = date.getHours();
			reponse = 'Il est ' + current_hour + ' heures aujourdhui'
			break;
		case 'tg le bot':
			reponse = 'C pas gentil :('
			break;
		case 'nope':
			reponse = 'Correction : Nope.AVI'
			break;
	}
	message.reply(reponse);
});


client.login(process.env.BOT_TOKEN);
