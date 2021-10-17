module.exports.config = {
    name: "tagsml",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "NPĐ đã bay😎",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "tagsml <sốlần> @mention",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}


module.exports.run = async function({ api, args, Users, event}) {
    var speak = ["Bạn là nhất","Nhất bạn rồi", "Bạn số 1","Bạn đâu rồi","Alo bạn ơi"];
    var sốlần = parseFloat(args[0]);
    var mention = Object.keys(event.mentions)[0];
    if (typeof sốlần == "number" && isNaN(sốlần)) return api.sendMessage("Bạn phải nhập số lần tag", event.threadID, event.messageID);
    if(sốlần <= 0 || sốlần >= 10000) return api.sendMessage("số lần phải lớn hơn 0 và nhỏ hơn 10000", event.threadID, event.messageID);
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn", event.threadID);
    var baka = setInterval(()=>{
        var index = Math.floor(Math.random() * speak.length)
        api.sendMessage({
            body: speak[index],
            mentions: [{
                tag: `Bạn`,
                id: mention
            }]
        }, event.threadID, event.messageID);
    }, 1000);
    setTimeout(()=>{
        clearInterval(baka);
    }, (sốlần + 1 )*1000);
 }