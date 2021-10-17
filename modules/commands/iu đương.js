module.exports.config = {
name: "iu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "iu",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Iu")==0 || (event.body.indexOf("iu")==0)) {
		var msg = {
				body: " ‍ Yêu đương thì cút ra ngoài ở đây yêu đương cái lồn :)  ",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}