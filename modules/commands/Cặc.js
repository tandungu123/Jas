module.exports.config = {
name: "Cặc",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Cặc",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Cặc")==0 || (event.body.indexOf("Cặc")==0)) {
		var msg = {
				body: " ",
				attachment: fs.createReadStream(__dirname + `/noprefix/cac.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}