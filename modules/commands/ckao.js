module.exports.config = {
name: "ckao",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "huy",
	description: "ckao",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Chào")==0 || (event.body.indexOf("chào")==0)) {
		var msg = {
				body: "-Chào công túa ${name} của Bot :3 ",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}