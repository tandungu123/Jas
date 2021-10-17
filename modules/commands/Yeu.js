const fs = require("fs");
module.exports.config = {
name: "Yêu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung nhưng được mod lại bởi ppđ",
	description: "nói yêu 1 ai đó",
	commandCategory: "Games",
	usages: "yêu [tag] gif bomman",
	cooldowns: 5,
};
module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yêu [name]")==0 || (event.body.indexOf("Yêu [name]")==0)) {
		var msg = {
}
	module.exports.run = function({ api, event, client, __GLOBAL }) 
	   const fs = require("fs-extra");
    let { threadID, messageID, senderID } = event;
    var mention = Object.keys(event.mentions);
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
    else {
        var one = senderID, two = mention[0];
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "Ỏhh yêu {name} thế nhò :3 \nYêu vlon luôn❤️", attachment: fs.createReadStream(__dirname + `/noprefix/cak.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	
