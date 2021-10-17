module.exports.config = {
	name: "videomeme",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VĐT&NTH",
	description: "videomeme",
	commandCategory: "Hình Ảnh",
	usages: "videomeme",
	cooldowns: 1,
	
	};
			
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.leanhtruong.com/Video/Meme').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/videomeme.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/videomeme.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/videomeme.${ext}`)).on("close", callback);
			})
}
