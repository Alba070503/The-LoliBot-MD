import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
//let userr = global.db.data.users[m.sender]
//userr.registered = false
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)
const sections = [
{
title: `𝙇𝙞𝙨𝙩𝙖 𝙙𝙚𝙨𝙥𝙡𝙚𝙜𝙖𝙗𝙡𝙚`,
rows: [
      {title: "🔰 𝘾𝙧𝙚𝙖𝙙𝙤𝙧 🔰", description: null, rowId: `${usedPrefix}creadora`},
      {title: "♨️ 𝙄𝙣𝙨𝙩𝙖𝙡𝙖𝙧 𝙗𝙤𝙩 ♨️", description: null, rowId: `${usedPrefix}instalarbot`},
      {title: "🚀 𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙 🚀", description: null, rowId: `${usedPrefix}ping`},
      {title: "🌀 𝙈𝙚𝙣𝙪 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 🌀", description: null, rowId: `${usedPrefix}allmenu`},
      {title: "🌟 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤́𝙣 🌟", description: null, rowId: `${usedPrefix}infomenu`},
      {title: "🏅 𝙐𝙨𝙪𝙖𝙧𝙞𝙤 𝙥𝙧𝙚𝙢𝙞𝙪𝙢 🏅", description: null, rowId: `${usedPrefix}listprem`},
      {title: "🎡 𝙅𝙪𝙚𝙜𝙤𝙨 𝙙𝙞𝙣𝙖́𝙢𝙞𝙘𝙤𝙨 🎡", description: null, rowId: `${usedPrefix}juegosmenu`},
      {title: "🔊 𝙈𝙚𝙣𝙪 𝙙𝙚 𝙖𝙪𝙙𝙞𝙤𝙨 🔊", description: null, rowId: `${usedPrefix}audios`},
      {title: "🧰 𝙈𝙚𝙣𝙪 𝙢𝙤𝙙𝙞𝙛𝙞𝙘𝙖𝙧 𝙙𝙚 𝙖𝙪𝙙𝙞𝙤 🧰", description: null, rowId: `${usedPrefix}audioefectomenu`},
      {title: "🔰 𝙈𝙚𝙣𝙪 𝙙𝙚 𝙜𝙧𝙪𝙥𝙤 🔰", description: null, rowId: `${usedPrefix}grupomenu`},
      {title: "⚙️ 𝘾𝙚𝙣𝙩𝙧𝙤 𝙙𝙚 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙘𝙞𝙤́𝙣 ⚙️", description: null, rowId: `${usedPrefix}on`}, 
      {title: "🎈 𝙈𝙚𝙣𝙪 𝙨𝙩𝙞𝙘𝙠𝙚𝙧𝙨 𝙮 𝙛𝙞𝙡𝙩𝙧𝙤 🎈", description: null, rowId: `${usedPrefix}stickermenu`},
      {title: "🛰️ 𝙈𝙚𝙣𝙪 𝙘𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙙𝙤 🛰️", description: null, rowId: `${usedPrefix}convertidormenu`},
      {title: "✨ 𝙈𝙚𝙣𝙪 𝙚𝙛𝙚𝙘𝙩𝙤 𝙮 𝙡𝙤𝙜𝙤𝙨 ✨", description: null, rowId: `${usedPrefix}makermenu`}, 
      {title: "📲 𝙈𝙚𝙣𝙪 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖 📲", description: null, rowId: `${usedPrefix}descargasmenu`},
      {title: "🔍 𝙈𝙚𝙣𝙪 𝙙𝙚 𝙗𝙪́𝙨𝙦𝙪𝙚𝙙𝙖 🔍", description: null, rowId: `${usedPrefix}buscarmenu`},
      {title: "⛩️ 𝙍𝙖𝙣𝙙𝙤𝙬 𝙖𝙣𝙞𝙢𝙚 ⛩️", description: null, rowId: `${usedPrefix}randommenu`},
      {title: "🔞 𝙈𝙚𝙣𝙪 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 +18 🔞", description: null, rowId: `${usedPrefix}hornymenu`},
      {title: "💎 𝙈𝙚𝙣𝙪 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤) 💎", description: null, rowId: `${usedPrefix}ownermenu`},
      {title: "📄 𝙏𝙚́𝙧𝙢𝙞𝙣𝙤𝙨 𝙮 𝙘𝙤𝙣𝙙𝙞𝙘𝙞𝙤𝙣𝙚𝙨 📄", description: null, rowId: `términos`},
      

]}, ]
 
let name = await conn.getName(m.sender)
//let name = conn.getName(m.sender)
const listMessage = {
text: `╭───────────────────❀\n│${ucapan()}\n│💝¸.• *${name}* •.¸💝\n╰───────────────────❀
╭━━〔 *${wm}* 〕━━⬣
┃✪ *𝑻𝒊𝒆𝒎𝒑𝒐 𝒂𝒄𝒕𝒖𝒂𝒍*
┃➺ ${time}   
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *𝑨𝒄𝒕𝒊𝒗𝒂 𝒅𝒖𝒓𝒂𝒏𝒕𝒆*
┃➺ ${uptime}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *𝑽𝒆𝒓𝒔𝒊𝒐𝒏 𝒅𝒆𝒍 𝒕𝒉𝒆 𝒍𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫*
┃➺ ${vs}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *𝑼𝒔𝒖𝒂𝒓𝒊𝒐(s)*
┃➺ ${Object.keys(global.db.data.users).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *𝑴𝒐𝒅𝒐*
┃➺ ${global.opts['self'] ? '𝒑𝒓𝒊𝒗𝒂𝒅𝒐' : '𝒑𝒖́𝒃𝒍𝒊𝒄𝒐'}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *𝑪𝒉𝒂𝒕 𝒑𝒓𝒐𝒉𝒊𝒃𝒊𝒅𝒐*
┃➺ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *𝑼𝒔𝒖𝒂𝒓𝒊𝒐 𝒑𝒓𝒐𝒉𝒊𝒃𝒊𝒅𝒐*
┃➺ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
╰━━━━━━━━━━━━━━━━━━⬣`, footer: `${wm}`, //${name} ${ucapan()}
title: null,
buttonText: "𝑺𝒆𝒍𝒆𝒄𝒄𝒊𝒐́𝒏𝒆𝒔 𝒂𝒒𝒖𝒊́", 
sections }

let imagen = './media/menus/Menu3.jpg'
let ftroli = { key: { fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us" }, "message": { orderMessage: { itemCount: 6546464643, status: 200, thumbnail: imagen, surface: 200, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' }}, contextInfo: { "forwardingScore": 999, "isForwarded": true}, sendEphemeral: true}  

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

await conn.sendMessage(m.chat, listMessage)
//await conn.relayMessage(m.chat, { text: listMessage, mentions: [m.sender] }, { quoted: fkontak, m })
//await conn.sendMessage(m.chat, { text: listMessage, mentions: [m.sender] }, { quoted: fkontak, m })
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
//handler.register = true
handler.exp = 50
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "👋 *𝑩𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒐(A) | 𝒘𝒆𝒍𝒄𝒐𝒎𝒆* 👋"
  if (time >= 4) {
    res = "🌇 *𝑩𝒖𝒆𝒏𝒐𝒔 𝒅𝒊́𝒂𝒔* ⛅"
  }
  if (time >= 11) {
    res = "🏙️ *𝑩𝒖𝒆𝒏𝒂𝒔 𝒕𝒂𝒓𝒅𝒆* 🌤️"
  }
  if (time >= 15) {
    res = "🌆 *𝑩𝒖𝒆𝒏𝒂𝒔 𝒕𝒂𝒓𝒅𝒆* 🌥️"
  }
  if (time >= 17) {
    res = "🌃 *𝑩𝒖𝒆𝒏𝒂𝒔 𝒏𝒐𝒄𝒉𝒆𝒔* 💫"
  }
  return res
} 



/*import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
//let userr = global.db.data.users[m.sender]
//userr.registered = false
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)

let name = await conn.getName(m.sender)
//let name = conn.getName(m.sender)

let menu = `╭───────────────────❀\n│${ucapan()}\n│💖•.¸💝¸.• *${name}* •.¸💝¸.•💖\n╰───────────────────❀
╭━━〔 *${wm}* 〕━━⬣
┃✪ *Tiempo Actual | Current Time*	    
┃➺ ${time}   
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Activa durante | Active during* 
┃➺ ${uptime}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Versión de GataBot-MD*
┃➺ ${vs}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Usuario(s) | Users*
┃➺ ${Object.keys(global.db.data.users).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Modo | Mode*
┃➺ ${global.opts['self'] ? '𝙋𝙍𝙄𝙑𝘼𝘿𝙊 - 𝙋𝙍𝙄𝙑𝘼𝙏𝙀' : '𝙋𝙐𝘽𝙇𝙄𝘾𝙊 - 𝙋𝙐𝘽𝙇𝙄𝘾'}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Chat(s) Prohibido(s) | Forbidden Chats*
┃➺ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Usuario(s) Prohibido(s) | Prohibited Users*
┃➺ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
╰━━━━━━━━━━━━━━━━━━━⬣`
//menulista
let menulista = `
╭━━━━━━━━━━━━━━━━━━━⬣
┃ ⚡ 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐 ⚡
┃ 💖 ${name}
╰━━━━━━━━━━━━━━━━━━━⬣
${readMore}
╭━━━━━━━━━━━━━━━━━━━⬣
┃ 💖 𝘾𝙍𝙀𝘼𝘿𝙊𝙍𝘼 | 𝘾𝙍𝙀𝘼𝙏𝙊𝙍 💖
┃ _${usedPrefix}creadora_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💖 𝘿𝙊𝙉𝘼𝙍 | 𝘿𝙊𝙉𝘼𝙏𝙀 💖
┃ _${usedPrefix}donar_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🚀 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿 | 𝙎𝙋𝙀𝙀𝘿 🚀
┃ _${usedPrefix}ping_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🌀 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 | 𝙁𝙐𝙇𝙇 𝙈𝙀𝙉𝙐 🌀
┃ _${usedPrefix}allmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🏆 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘾𝙇𝘼𝙎𝙄𝙁𝙄𝘾𝘼𝙏𝙊𝙍𝙄𝘼 🏆
┃ _${usedPrefix}top_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🌟 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 | 𝙄𝙉𝙁𝙊 𝙈𝙀𝙉𝙐 🌟
┃ _${usedPrefix}infomenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🎡 𝙅𝙐𝙀𝙂𝙊𝙎 𝘿𝙄𝙉𝘼𝙈𝙄𝘾𝙊𝙎 | 𝙂𝘼𝙈𝙀𝙎 🎡
┃ _${usedPrefix}juegosmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🔊 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊𝙎 | 𝘼𝙐𝘿𝙄𝙊𝙎 🔊
┃ _${usedPrefix}audios_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🧰 𝙈𝙀𝙉𝙐 𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝘿𝙊𝙍 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊 🧰
┃ _${usedPrefix}audioefectomenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🔰 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊 | 𝙂𝙍𝙊𝙐𝙋 🔰
┃ _${usedPrefix}grupomenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ⚙️ 𝘾𝙀𝙉𝙏𝙍𝙊 𝘿𝙀 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄𝙊𝙉 ⚙️
┃ _${usedPrefix}on_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🎈 𝙈𝙀𝙉𝙐 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙔 𝙁𝙄𝙇𝙏𝙍𝙊𝙎 🎈
┃ _${usedPrefix}stickermenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🛰️ 𝙈𝙀𝙉𝙐 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍 | 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙀𝙍 🛰️
┃ _${usedPrefix}convertidormenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ✨ 𝙈𝙀𝙉𝙐 𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝙔 𝙇𝙊𝙂𝙊𝙎 ✨
┃ _${usedPrefix}makermenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 📲 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 | 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 📲
┃ _${usedPrefix}descargasmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🔍 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘽𝙐𝙎𝙌𝙐𝙀𝘿𝘼𝙎 | 𝙎𝙀𝘼𝙍𝘾𝙃 🔍
┃ _${usedPrefix}buscarmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ⛩️ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙈𝙀 | 𝘼𝙉𝙄𝙈𝙀 ⛩️
┃ _${usedPrefix}randommenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🔞 𝙈𝙀𝙉𝙐 +18 | 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 +18 🔞
┃ _${usedPrefix}hornymenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ⚗️ 𝙈𝙀𝙉𝙐 𝙍𝙋𝙂 ⚗️
┃ _${usedPrefix}rpgmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💎 𝙈𝙀𝙉𝙐 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊(𝘼) | 𝙊𝙒𝙉𝙀𝙍 💎
┃ _${usedPrefix}ownermenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 📄 𝙏𝙀𝙍𝙈𝙄𝙉𝙊𝙎, 𝘾𝙊𝙉𝘿𝙄𝘾𝙄𝙊𝙉𝙀𝙎 
┃ 𝙔 𝙋𝙍𝙄𝙑𝘼𝘾𝙄𝘿𝘼𝘿 📄
┃ _Términos_
╰━━━━━━━━━━━━━━━━━━━⬣`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
} 
await conn.sendMessage(m.chat, { text: menu, mentions: [m.sender] }, { quoted: fkontak, m })
await conn.sendMessage(m.chat, { text: menulista, mentions: [m.sender] }, { quoted: fkontak, m })
	
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
//handler.register = true
handler.exp = 50
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "👋 *BIENVENIDO(A) | WELCOME* 👋"
  if (time >= 4) {
    res = "🌇 *Buenos Días | Good Morning* ⛅"
  }
  if (time >= 11) {
    res = "🏙️ *Buenas Tardes | Good Afternoon* 🌤️"
  }
  if (time >= 15) {
    res = "🌆 *Buenas tardes | Good Afternoon* 🌥️"
  }
  if (time >= 17) {
    res = "🌃 *Buenas noches | Good Evening* 💫"
  }
  return res
}*/

