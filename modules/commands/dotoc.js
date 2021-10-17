module.exports.config = {
name: "Độ tộc",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Độ tộc",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Độ tộc")==0 || (event.body.indexOf("Độ tộc")==0)) {
		var msg = {
				body: " Nhac anh Độ ne ",
				attachment: fs.createReadStream(__dirname + `/noprefix/dotoc.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}