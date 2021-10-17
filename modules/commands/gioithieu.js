module.exports.config = {
	name: "gioithieu",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HelyT",
	description: "Thông tin nhà tài trợ và nhà phát triển",
	commandCategory: "Info", 
	usages: "gioithieu [thông tin cho bạn]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("»» 👾 𝑨𝒅𝒎𝒊𝒏 𝑩𝒐𝒕 👾 ««\n👤Tên: Nguyễn Tấn Huy (Nemo)\n🚫Date off Birth : 15 \n🚹😙Giới Tính: Nam \n🆙Chiều Cao: 1m74 \n💔Mối Quan Hệ: Đố biết\n👫Gu: Ưu nhìn không trap :)\n🌼Tính Cách: Vui vẻ, Hòa đồng, Ít để bụng, Dễ gần, iu thưn động vật :>\n🆔Facebook: \nfb.me/Wall.NguyenTanHuy.No1\n📱Zalo: 0797001026\n💡Sở thích: Chơi Game, Viết Code, Du lịch, Nghe Nhạc, Nấu Ăn...\n\n------------------------------------------------------\n             Góc donate :3                     \n------------------------------------------------------\n\nMB Bank: Bẻ thẻ\n\nViettinBank:Bẻ nốt\n\nMomo:0797001026\n\nDonate để admin mua mì gói :3\n» Welcome «",event.threadID, event.messageID);
	}
}