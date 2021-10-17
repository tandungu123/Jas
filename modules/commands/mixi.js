module.exports.config = {
	name: "mixi",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thanh dz",
	description: "Random ảnh Misthy :))",
	commandCategory: "random-img",
	usages: "mixi",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://mixi.code-gaga.repl.co').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/mixi.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/mixi.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/mixi.${ext}`)).on("close", callback);
			})
}