module.exports.config = {
name: ":icon",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Icon",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("🙂")==0 || (event.body.indexOf("🙂")==0)) {
		var msg = {
				body: " bạn có biết icon này hãm lắm không?",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}