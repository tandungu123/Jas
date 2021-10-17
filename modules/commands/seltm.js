module.exports.config = {
name: "seltm",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Sao em lại tắt máy",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("seltm")==0 || (event.body.indexOf("Seltm")==0)) {
		var msg = {
				body: "Sao em lại tắt máy ",
				attachment: fs.createReadStream(__dirname + `/noprefix/seltm.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}