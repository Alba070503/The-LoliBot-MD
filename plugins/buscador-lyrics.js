import fetch from 'node-fetch'
import { lyrics, lyricsv2, googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!teks) throw `${lenguajeGB['smsAvisoMG']()}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙉𝘼 𝘾𝘼𝙉𝘾𝙄𝙊𝙉 𝙋𝘼𝙍𝘼 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙇𝘼 𝙇𝙀𝙏𝙍𝘼\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Runaway*`
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
try { 
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json

await conn.reply(m.chat, `𝙏𝙄𝙏𝙐𝙇𝙊
💚 *${result.title}*

𝘼𝙐𝙏𝙊𝙍(𝘼)
💜 *${result.author}*


${result.lyrics}


𝙀𝙉𝙇𝘼𝘾𝙀
🧡 *${result.link}*`, fkontak,  m)

} catch (e) {
  await conn.reply(m.chat, `*⚠️ VUELVA A INTERNARLO, SI EL COMANDO SIGUE FALLANDO REPÓRTELO A LA CREADORA USANDO #reporte*`, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
handler.limit = 1
handler.level = 3
handler.exp = 55
export default handler 
