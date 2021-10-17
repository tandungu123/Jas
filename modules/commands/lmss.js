/*module.exports.config = {
	name: "lmss",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Jukie~",
	description: "Lời bài hát from nhaccuatui",
	commandCategory: "Phương tiện",
	usages: "lyrics [tên bài hát]",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let timkiem = args.join(" ");
const res = await axios.get(`https://lmssplus.com/profile/${timkiem}`);
var lyrics = res.data.nameAndImg_level__327IV;

return api.sendMessage(`${lyrics} `, event.threadID, event.messageID)
}