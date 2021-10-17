module.exports.config = {
name: "Dao",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "dao",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("dao")==0 || (event.body.indexOf("Dao")==0)) {
		var msg = {
				body: " ",
				attachment: fs.createReadStream(__dirname + `/noprefix/Dao.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}