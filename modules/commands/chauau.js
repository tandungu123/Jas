module.exports.config = {
	name: "chauau",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VĐT&NTH",
	description: "chauau",
	commandCategory: "Hình Ảnh",
	usages: "chauau",
	cooldowns: 1,
	
	};
			
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('http://api.leanhtruong.com/baibaifern').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/chauau.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/chauau.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/chauau.${ext}`)).on("close", callback);
			})
}
