import { igdl } from "ruhend-scraper"

let handler = async (m, { args, conn }) => {
  if (!args[0]) {
    return conn.reply(m.chat, '*[ ☕ ] Ingresa un link de Instagram*')
  }
  try {
    await m.react('⏳️')
    conn.reply(m.chat, `*[ ☕ ] Ƈᴀʀɢᴀɴᴅᴏ...*\n▰▰▰▰▰▰▰▰▭▭`)
    let res = await igdl(args[0])
    let data = res.data
    for (let media of data) {
      await new Promise(resolve => setTimeout(resolve, 2000))
      await conn.sendFile(m.chat, media.url, 'instagram.mp4', '157Bot')
    }
  } catch {
    await m.react('❌')
    conn.reply(m.chat, '*[ ℹ️ ] Ocurrió un error.*')
  }
}

handler.command = ['instagram', 'ig', 'instagram2', 'ig2']
handler.tags = ['downloader']
handler.help = ['instagram', 'ig']

export default handler