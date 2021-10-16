module.exports.config = {
name: "Box tồi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Box tồi",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Box tồi")==0 || (event.body.indexOf("box tồi")==0)) {
		var msg = {
				body: " ‍ mày có tt box chưa mà bảo box tồi ",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}