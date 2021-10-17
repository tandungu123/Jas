module.exports.config = {
name: "haha",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Haha",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Haha")==0 || (event.body.indexOf("Haha")==0)) {
		var msg = {
				body: "cười ẻ ghê :) ",
				attachment: fs.createReadStream(__dirname + `/noprefix/tka.gif`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}