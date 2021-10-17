const fs = require("fs");
module.exports.config = {
name: "quê",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "quê",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
        var tl = ["-Q U Ê CHƯA CƯNG","-N H Ụ C VẬY EM","QUÊ huong em là chùm nhãn N H Ụ C","Q U Ê HƯƠNG ANH NƯỚC MẶN ĐỒNG CHUA","ÔI Q U Ê HƯƠNG ĐẸP BIẾT BAO"];
        var rand = tl[Math.floor(Math.random() * tl.length)];
	if (event.body.indexOf("quê")==0 || (event.body.indexOf("Quê")==0)) {
		var msg = {
				body: rand
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}