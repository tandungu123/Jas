module.exports.config = {
name: "TheNight",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "TheNight",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("TheNight")==0 || (event.body.indexOf("TheNight")==0)) {
		var msg = {
				body: "  ",
				attachment: fs.createReadStream(__dirname + `/noprefix/y2mate.com - Avicii  The Nights Vadim Lysikov Remix.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}