const Discord = require('discord.js');
const client = new Discord.Client();
var date = new Date();
var current_hour = date.getHours();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setUsername('Kaede')
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
    	message.reply('LL on te parle!');
  	}
});

client.on('message', message => {
    if (message.content === 'troll') {
    	message.reply('morsay et cortex cest du troll non professionel tout comme TOI');
  	}
});

client.on('message', message => {
    if (message.content === 'horloge') {
        var current_hour = date.getHours();
    	message.reply('Il est ' + current_hour + ' heures aujourdhui');
  	}
});

client.on('message', message => {
    if (message.content === 'tg le bot') {
    	message.reply('C pas gentil :(');
  	}
});

client.on('message', message => {
    if (message.content === 'nope') {
    	message.reply('Correction : Nope.AVI');
  	}
});

client.on('message', message => {
    if (message.content === 'chinese') {
    	message.reply('CHINESE CHINESE CHINESE , ANYTHING GOES.. EVEN CHINESE! http://i0.kym-cdn.com/entries/icons/original/000/022/632/CHINESE.jpg');
  	}
});

client.on('message', message => {
    if (message.content === 'ok google') {
    	message.reply('Pardon? Je ne suis pas Google ! Voyons donc :| ');
  	}
});

client.on('message', message => {
    if (message.content === 'rastacouette') {
    	message.reply('Queuah?!');
  	}
});

client.on('message', message => {
    if (message.content === 'allo') {
    	message.reply('Oui? Allo?? http://i.cubeupload.com/LmqyrB.png ');
  	}
});

client.on('message', message => {
    if (message.content === 'a plus') {
    	message.reply('A plus tard !');
  	}
});

client.on('message', message => {
    if (message.content === 'tg') {
    	message.reply('Tes pas sympa :C nyaaa ...');
  	}
});

client.on('message', message => {
    if (message.content === 'la') {
    	message.reply('Ou la !');
  	}
});

client.on('message', message => {
    if (message.content === 'ftg') {
    	message.reply('Au moins j aurais essayé');
  	}
});

client.on('message', message => {
    if (message.content === 'cyka blyat') {
    	message.reply('NYA ! NE DIT PAS SA SINON TU AURA AFFAIRE A MUAH ! NYYA');
  	}
});

client.on('message', message => {
    if (message.content === 'google') {
    	message.reply('google est ton ami');
  	}
});

client.on('message', message => {
    if (message.content === 'le') {
    	message.reply('Le quoi? http://i.cubeupload.com/LmqyrB.png ');
  	}
});

client.on('message', message => {
    if (message.content === 'ha') {
    	message.reply('http://i.cubeupload.com/ubtikz.png');
  	}
});

client.on('message', message => {
    if (message.content === 'ptdr t ki') {
    	message.reply('http://i.cubeupload.com/C5tg7S.gif EUH...');
  	}
});

client.on('message', message => {
    if (message.content === '!bigmac') {
    	message.reply('http://i.cubeupload.com/fnlXfP.png big mac pliz');
  	}
});

client.on('message', message => {
    if (message.content === '!bigmacpliz') {
    	message.reply('http://i.cubeupload.com/fnlXfP.png big mac pliz');
  	}
});

client.on('message', message => {
    if (message.content === '!bigmacplz') {
    	message.reply('http://i.cubeupload.com/fnlXfP.png big mac pliz');
  	}
});

client.on('message', message => {
    if (message.content === 'SOMEBODY TOUCHA MY SPAGHETT') {
    	message.reply('http://i0.kym-cdn.com/photos/images/newsfeed/001/332/955/58e.gif');
  	}
});

client.on('message', message => {
    if (message.content === '!excellent') {
    	message.reply('https://static.comicvine.com/uploads/square_medium/0/4772/151575-47591-mr-burns.jpg');
  	}
});

client.on('message', message => {
    if (message.content === '!zaius') {
    	message.reply('https://i.pinimg.com/originals/80/e2/59/80e259486e8ddb121b416602524b3c89.jpg EXCELLENT');
  	}
});

client.on('message', message => {
    if (message.content === '!zaius2') {
    	message.reply('https://im-01.gifer.com/fetch/w300-preview/d1/d1b2f392af965a301b00f38d33d08990.gif');
  	}
});

client.on('message', message => {
    if (message.content === '!zaiusohnodude') {
    	message.reply('https://i.pinimg.com/originals/46/37/06/463706b1a9e56ad3cde2f37d13c15f9d.png');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
