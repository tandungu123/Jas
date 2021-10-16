module.exports.config = {
	name: "block",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VĐT&NTH",
	description: "Ừ thì nó chỉ là chặn z thôi",
	commandCategory: "media",
	usages: "Chặn User Dùng Bot",
	cooldowns: 0,
};



module.exports.handleReaction = async ({ event, api, Users, handleReaction }) => {
	if (parseInt(event.userID) !== parseInt(handleReaction.author)) return;
	switch (handleReaction.type) {
		case "ban": {
			const name = global.data.userName.get(handleReaction.target) || await Users.getNameUser(handleReaction.target);
			const data = (await Users.getData(handleReaction.target)).data || {};
			data.banned = 1;
			await Users.setData(handleReaction.target, { data });
			global.data.userBanned.set(parseInt(handleReaction.target), 1);
			api.sendMessage(`[${handleReaction.target} | ${name}] Đã chặn người dùng`, event.threadID, () => api.unsendMessage(handleReaction.messageID));
			break;
		}
		case "unban": {
			const name = global.data.userName.get(handleReaction.target) || await Users.getNameUser(handleReaction.target);
			const data = (await Users.getData(handleReaction.target)).data || {};
			data.banned = 0;
			await Users.setData(handleReaction.target, { data });
			global.data.userBanned.delete(parseInt(handleReaction.target));
			api.sendMessage(`[${handleReaction.target} | ${name}] Đã bỏ chặn người dùng`, event.threadID, () => api.unsendMessage(handleReaction.messageID));
			break;
		}
		default:
			break;
	}
}