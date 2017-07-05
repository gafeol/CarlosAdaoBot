const TelegramBot = require('node-telegram-bot-api');
const token = '408875259:AAHCD44BFcLJnNMfWw_ajk5-p9wuK8CJEKw';

var bot = new TelegramBot(token,{polling: true});

bot.onText(/\/frase/, function(msg) {
		var chatId = msg.chat.id;
		var n = Math.random() * 9;
		var ret;
		if(n < 1) ret = 'Carlos Adão é reflexão';
		else if (n < 2) ret = 'Sentir Carlos Adão é viver';
		else if (n < 3) ret = 'Carlos Adão, menos guerra mais pão';
		else if (n < 4) ret = 'Sublime Carlos Adão';
		else if (n < 5) ret = 'Carlos Adão, Picasso do Coração';
		else if (n < 6) ret = 'Carlos Adão Bonitão';
		else if (n < 7) ret = 'Carlos Adão Melhor que Basky';
		else if (n < 8) ret = 'Oh! Carlos Adão';
		else ret = 'Dia 18 Carlos Adão Pixe Outubro';
		bot.sendMessage(chatId, ret);
	});

bot.onText(/\/arte/, function(msg) {
		var chatId = msg.chat.id;
		var n = Math.random() * 5;
		if(n < 1) bot.sendPhoto(chatId, "http://publistagram.com//wp-content/uploads/2012/10/24092010004.jpg");
		else if(n < 2) bot.sendPhoto(chatId, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSggz157PkHUMlJzIeCOc7lw61P4xKT_Xkl2gx-hlE0FhgdO6BE");
		else if(n < 3) bot.sendPhoto(chatId, "https://ideiasemhifen.files.wordpress.com/2009/04/carlosadao3.jpg");
		else if(n < 4) bot.sendPhoto(chatId, "https://http2.mlstatic.com/carlos-ado-aba-D_NQ_NP_14121-MLB3488427648_122012-F.jpg");
		else bot.sendPhoto(chatId, "http://mlb-s2-p.mlstatic.com/carlos-ado-14135-MLB3488411866_122012-F.jpg");
		});

module.exports = bot;
