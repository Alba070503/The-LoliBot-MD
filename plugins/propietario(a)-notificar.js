import fs from 'fs'
const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
const grupo = 'https://chat.whatsapp.com/Ei87TDT7fsI3Q3p5MnM9sW' //nna

let handler = async (m, { conn, text, usedPrefix, command, groupMetadata }) => {
//let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": 'lolibot', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': wm, 'jpegThumbnail': false }}}
let fkontak2 = { key: { participant: '0@s.whatsapp.net' }, message: { contactMessage: { displayName: `The LoliBot-MD \n` + groupMetadata.subject, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, jpegThumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), thumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), sendEphemeral: true }}}
if (!text) throw `*Falta Texto*`
let [_, code] = grupo.match(linkRegex) || []

try{
let res = await conn.groupAcceptInvite(code)
await conn.sendMessage(res, { text: text, mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fkontak2 })
await m.reply(`✅ *MENSAJE ENVIADO CON ÉXITO* `)
  
} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.command = ['mensaje'] 
handler.owner = true

export default handler