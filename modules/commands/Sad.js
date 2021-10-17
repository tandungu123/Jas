module.exports.config = {
name: "Sad",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Sad",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Sad")==0 || (event.body.indexOf("Sad")==0)) {
		var msg = {
				body: "Nhạc buồn tâm trạng  ",
				attachment: fs.createReadStream(__dirname + `/noprefix/ccc.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}