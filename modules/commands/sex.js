module.exports.config = {
  name: "sex",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "VĐT&NTH",
  description: "Random ảnh chế nhưng của Việt Nam :))",
  commandCategory: "random-img",
  usages: "sex",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://trungkien.tk/nude.php').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
            attachment: fs.createReadStream(__dirname + `/cache/sex.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sex.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/sex.${ext}`)).on("close", callback);
      })
}