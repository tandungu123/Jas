module.exports.config = {
name: "Khùng",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Khùng",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Khùng")==0 || (event.body.indexOf("khùng")==0)) {
		var msg = {
				body: " ‍ khùng gái mẹ m ",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}