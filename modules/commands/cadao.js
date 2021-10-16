module.exports.config = {
	name: "cadao",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VĐT&NTH",
	description: "Ca Dao Việt Nam",
	commandCategory: "News",
	usages: "gai",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
const res = await axios.get(`https://api.vangbanlanhat.tk/other?type=cadao`);
var cadao = res.data.data
return api.sendMessage(` ${cadao} `, event.threadID, event.messageID)
}