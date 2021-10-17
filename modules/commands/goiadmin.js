module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100008366197051") {
    var aid = ["100008366197051","100008366197051"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mê Admin em hay gì mà tag =))","Tag nữa Admin em đấm cho đấy","Đã bảo đừng tag Admin mà, bộ thích ăn đấm lắm hả😠","Nàm sao mà tag Admin em"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }