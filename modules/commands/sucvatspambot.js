module.exports.config = {
    name: "sucvat",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Huy &dựa trên taglientuc của VanHung & Dựa trên demo của NTKhang",
    description: "dành cho thg l spam bot =)))",
    commandCategory: "group",
    usages: "sucvat @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag để chửi 1 ai đó", event.threadID);
    let data = await api.getUserInfo(mention);
    let name = data[parseInt(mention)].name;
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu chửi!");
setTimeout(() => {a({body: "Hello ranh con 😳" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Nay tao xin phép chửi chết mẹ mày thằng ranh con mất dạy này 😏 " + " " + name, mentions: arraytag})} , 4000);
setTimeout(() => {a({body: "Địt mẹ mày bước ra con chó " + " " + name, mentions: arraytag})} , 5000);
setTimeout(() => {a({body: "Để bố mày dạy lại mày địt mẹ mày ranh con " + " " + name, mentions: arraytag})} , 6000);
setTimeout(() => {a({body: "Nào địt mẹ đâu rồi ra đây bố biểu 🙂" })} , 6500);
setTimeout(() => {a({body: "Lại chốn đâu rồi ranh con này 🙂?"})} , 7000);
setTimeout(() => {a({body: "Bố chém chết cha mày cái loại hãm lồn đầu chứa cứt 😏 " })} , 7500);
setTimeout(() => {a({body: "sống cho đẹp mặt lên nha ranh con" + " " + name, mentions: arraytag})} , 8000);
setTimeout(() => {a({body: "Bố mày gặp đâu phang chết mẹ mày đó" + " " + name, mentions: arraytag})} , 8500);
setTimeout(() => {a({body: "Xin phép chửi đến đây 😩lấy hơi tý chửi tiếp ahihi 🤓" })} , 9000);
 }