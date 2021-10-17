module.exports.config = {
	name: "time",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Xem bây giờ là mấy giờ",
	commandCategory: "Khác", 
	usages: "time", 
	cooldowns: 0,
	dependencies: [] 
};
module.exports.run = async function({ api, event, args, Currencies, utils, Users }) {
	const moment = require("moment-timezone");
	let thoigian = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
	var d = new Date();
    var dd = d.getDate()-1
    var yyyy = d.getFullYear()
    var mm = d.getMonth()+1
    let name = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);
    let data = (await Users.getData(event.senderID)).data || {};
    return api.sendMessage(`👋 Chào bạn ${name} Chúc bạn 1 ngày tốt lành\nBây giờ là: ${thoigian} 🥰\nNgày: ${dd+1}/${mm}/${yyyy}`, event.threadID, event.messageID)
}