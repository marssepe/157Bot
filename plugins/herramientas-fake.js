let handler = async (m, { conn, text, usedPrefix, command }) => {
let txt = `*[ ℹ️ ] Ejemplo de uso:*\n\n> ${usedPrefix + command} ¿Quién soy? *@user* Eres mi putita.`
if (!text) return m.reply(txt)
let cm = copy(m)
let who
if (text.includes('@0')) who = 'contacto@Marssepe.dev'
else if (m.isGroup) who = cm.participant = m.mentionedJid[0]
else who = m.chat
if (!who) return m.reply(txt)
cm.key.fromMe = false
cm.message[m.mtype] = copy(m.msg)
let sp = '@' + who.split`@`[0]
let [fake, ...real] = text.split(sp)
  conn.fakeReply(m.chat, real.join(sp).trimStart(), who, fake.trimEnd(), m.isGroup ? m.chat : false, {
contextInfo: {
mentionedJid: conn.parseMention(real.join(sp).trim())
}})}
handler.help = ['fake']
handler.tags = ['herramientas']
handler.command = /^(fake)$/
handler.register = true 

export default handler

function copy(obj) {
  return JSON.parse(JSON.stringify(obj))
}