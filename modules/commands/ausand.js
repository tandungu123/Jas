module.exports.config = {
	name: "ausand",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VĐT&NTH",
	description: "Random ảnh Ausand:))",
	commandCategory: "random-img",
	usages: "ausand",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://trungkien.tk/ausand.php').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/ausand.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ausand.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/ausand.${ext}`)).on("close", callback);
			})
}