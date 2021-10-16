module.exports.config = {
	name: "beo",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VĐT&NTH",
	description: "Random ảnh gái xinh nhất Việt Nam :))",
	commandCategory: "random-img",
	usages: "beo",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://beo.code-gaga.repl.co/').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/beo.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/beo.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/beo.${ext}`)).on("close", callback);
			})
}