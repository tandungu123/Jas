module.exports.config = {
name: "Còn cái nịt",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Còn cái nịt",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Còn cái nịt")==0 || (event.body.indexOf("Còn cái nịt")==0)) {
		var msg = {
				body: "Nghe lời thầy dạy nè",
				attachment: fs.createReadStream(__dirname + `/noprefix/concainit.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}