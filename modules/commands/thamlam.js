module.exports.config = {
name: "Tham lam",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Tham lam",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Tham lam")==0 || (event.body.indexOf("Tham lam")==0)) {
		var msg = {
				body: " Đúng nó tham lắm ",
				attachment: fs.createReadStream(__dirname + `/noprefix/thamlam.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}