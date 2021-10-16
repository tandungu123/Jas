const fs = require("fs");
module.exports.config = {
name: "Amtcn",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Amtcn",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Amtcn")==0 || (event.body.indexOf("amtcn")==0)) {
		var msg = {
				body: "Đại Mèo ",
				attachment: fs.createReadStream(__dirname + `/noprefix/tytyty.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}