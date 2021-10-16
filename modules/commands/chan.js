const fs = require("fs");
module.exports.config = {
name: "chán",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "chán",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
        var tl = ["Bạn đang chán sao??\n Bắt con gián bỏ vào hán đi :3","Bạn ơi đừng chán nữa hãy yêu mình đi :3","Bot gất iu bạn :3"];
        var rand = tl[Math.floor(Math.random() * tl.length)];
	if (event.body.indexOf("chán")==0 || (event.body.indexOf("Chán")==0)) {
		var msg = {
				body: rand
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}