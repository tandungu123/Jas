module.exports.config = {
	name: "admins",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Lien he vs Admin bot",
	commandCategory: "Info", 
	usages: "Admin Bot[key]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("Bot hiện đang có  2 admins\n👉Sử dụng +admins 1 để xem tt admins 1\n👉Sử dụng +admins 2 để xem tt admins 2",event.threadID, event.messageID);
	}
	if (args[0] == "1") {
		return api.sendMessage("==== Admin 1 ====\nTên: Võ Đình Thanh\nLiên hệ:\nhttps://www.facebook.com/Username.VoDinhThanh.ProCoder/", event.threadID, event.messageID);
	}
	else if (args[0] == "2") {
		return api.sendMessage("==== Admin 2 ====\nTên: Nguyễn Thanh Hiền\nLiên hệ:\nhttps://www.facebook.com/profile.php?id=100017614066887", event.threadID, event.messageID);
	}
}