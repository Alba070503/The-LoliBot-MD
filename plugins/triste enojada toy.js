import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/triste enojada toy.mp3'
conn.sendFile(m.chat, vn, 'triste enojada toy.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Triste enojada toy|😩/
handler.command = new RegExp
export default handler