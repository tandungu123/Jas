module.exports.config = {
name: "Điên",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Điên",
	commandCategory: "Chửi admin :) ",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Huy điên")==0 || (event.body.indexOf("huy điên")==0)) {
		var msg = {
				body: "M làm như m bình thường?",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}