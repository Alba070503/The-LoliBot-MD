import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `🤔𝙦𝙪𝙚 𝙚𝙨𝙩𝙖 𝙗𝙪𝙨𝙘𝙖𝙙𝙤?🤔 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚/𝙩𝙞𝙩𝙪𝙡𝙤 𝙙𝙚 𝙘𝙖𝙣𝙘𝙞𝙤𝙣\n\n*—◉ 𝙀𝙟𝙚𝙢𝙥𝙡𝙤:\n#play lgante - bar*`
try {
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
if (command == 'play') {
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `📌 𝗧𝗶𝘁𝘂𝗹𝗼: ${title}\n📆 𝗣𝘂𝗯𝗹𝗶𝗰𝗮𝗰𝗶𝗼𝗻: ${published}\n👀 𝗩𝗶𝘀𝘁𝗮𝘀: ${views}`
const buttons = [{buttonId: `#menu`, buttonText: {displayText: '🎶 Menu 🎶'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: 'ᴇɴᴠɪᴀɴᴅᴏ ᴀᴜᴅɪᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: msg})
}

if (command == 'play2') {
let jsonn = await ytLink.json()
let vid = await jsonn.result.video
let capt = `📌 𝗧𝗶𝘁𝘂𝗹𝗼:: ${title}\n📆 𝗣𝘂𝗯𝗹𝗶𝗰𝗮𝗰𝗶𝗼𝗻: ${published}\n👀 𝗩𝗶𝘀𝘁𝗮𝘀: ${views}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '𓃠 𝙼𝚊𝚜 𝚁𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: 'ᴇɴᴠɪᴀɴᴅᴏ video, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendFile(m.chat, json.result.video, 'error.mp4', `_𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫_`, m)}
} catch (e) {
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = ['play', 'play2']
export default handler
