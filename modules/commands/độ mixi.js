module.exports.config = {
name: "Mixi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Mixi",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Mixi")==0 || (event.body.indexOf("Mixi")==0)) {
		var msg = {
				body: " nhạc anh độ nè ",
				attachment: fs.createReadStream(__dirname + `/noprefix/Mixi.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}