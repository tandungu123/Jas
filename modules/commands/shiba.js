module.exports.config = {
	name: "shiba",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Xem ảnh về dog Shiba",
	commandCategory: "Hình Ảnh",
	usages: "OTHER",
	cooldowns: 5
};
module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
	axios.get('https://trungkien.tk/shiba.php').then(res => {
	let anh = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/shiba.${anh}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/shiba.${anh}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/shiba.${anh}`)).on("close", callback);
			})
}