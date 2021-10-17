module.exports.config = {
name: "lồn",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Lồn",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Lồn")==0 || (event.body.indexOf("Lồn")==0)) {
		var msg = {
				body: ".Lồn đâu móc ra tao xem =))",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}