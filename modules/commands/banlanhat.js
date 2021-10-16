module.exports.config = {
name: "Bạn là nhất",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Bạn là nhất",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bạn là nhất")==0 || (event.body.indexOf("Bạn là nhất")==0)) {
		var msg = {
				body: " địt mẹ bạn là nhất :)  ",
				attachment: fs.createReadStream(__dirname + `/noprefix/banlanhat.mp4``)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}