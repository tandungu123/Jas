module.exports.config = {
name: "hi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "huy",
	description: "Hi",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 0,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "ngu.mp4")) request("").pipe(fs.createWriteStream(dirMaterial + "hi.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `Ngu vl`,
                attachment: fs.createReadStream(__dirname + `/noprefix/ngu.mp4`)
            }
    if (event.body.toLowerCase() == "ngu"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }