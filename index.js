const { Attachment, Client, RichEmbed } = require('discord.js');

const discord_client = new Client();

const txt_channel = 'bot-chat'; // The name of the text channel
const vce_channel = 'bot-call'; // The name of the voice channel
const super_user = 'Bruno Silva#1551'; // Your special user tag like that "Bruno Silva#1551"

discord_client.on('ready', () => {
	console.log(`Logged in as ${discord_client.user.tag}!`);
});

discord_client.on('message', msg => {
	if (msg.author.username != discord_client.user.username) {
		let args = msg.content.split(' ');
		switch (args[0].toLowerCase()) {
			case '!run':
				const command = msg.content.replace(args[0], '');
				try {
					eval(command);
				}
				catch (ex) {
					const embed = new RichEmbed()
						.setTitle(`Error: "${command}"`)
						.setColor(0xFF0000)
						.setDescription(ex.message);
					msg.channel.send(embed);
				}
				break;
		}
	}
});

function tryGetChannelURL(arg) {
	if (ytdl.validateURL(arg)) {
		return arg;
	}
	else if (ytdl.validateID(arg)) {
		return video_url_format.replace('VIDEOID', arg);
	}
	else {
		return '';
	}
}

function say(message) {
	sayOn(txt_channel, message);
}

function say(message, options) {
	sayOn(txt_channel, message, options);
}

function sayOnID(channelID, message) {
	getChannelByID(channelID).send(message);
}

function sayOn(channel, message) {
	getChannelByName(channel).send(message);
}

function sayOn(channel, message, options) {
	getChannelByName(channel).send(message, options);
}

function getChannelByID(id) {
	return discord_client.channels.find(channel => channel.id == id);
}

function getChannelByName(name) {
	return discord_client.channels.find(channel => channel.name == name);
}

function getVoiceChannelByName(name) {
	return discord_client.voiceConnections.find(channel => channel.channel.name == name);
}

discord_client.login('NTc4MjU4Mjc4Mjg3NTQwMjQ0.XNw_Bg.GPqTpl4cUn5VIHPPj_rB_tRAChA'); // Your Discord application token to login with your BOT 
