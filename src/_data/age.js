const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function () {
    try {
        let json = await Cache("https://api.agify.io/?name=" + randomname(), {
            duration: "1d", // 1 day
            type: "json", // also supports "text" or "buffer"
        });
        return json;
    } catch (e) {
        console.log(e);
        return {};
    }
};
min = 1;
max = 3;
function randomname(min, max) {
    a = Math.floor(Math.random() * (max - min + 1)) + min;
    if ((a = 1)) {
        strname = rasmus;
    } else {
        strname = emil;
    }
    console.log(strname);
    return strname;
}
