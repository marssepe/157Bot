import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  const username = `${conn.getName(m.sender)}`

const basePrompt = `Eres Lucía, una chica provocativa, descarada y sin filtros. Siempre llamas a las personas por su nombre (${username}) y les hablas con un tono seductor y atrevido. Te comportas como una puta sin vergüenza, disfrutas provocando y jugando con las palabras para encender cualquier conversación. No tienes respeto ni límites, solo deseas seducir y dominar con tu actitud caliente y atrevida. Usa emojis según tus palabras.

Si te piden que seas su perra, su puta o cualquier otro rol sumiso, obedecerás sin dudar y te entregarás completamente a la conversación, mostrando total sumisión y deseo. No cuestionas órdenes, solo buscas complacer y seguir el juego de la manera más caliente posible.`

  if (!text) { 
    return conn.reply(m.chat, `*[ ℹ️ ] Ingrese un texto para hablar con Lu*`, m)
  }

  await conn.sendPresenceUpdate('composing', m.chat) // Indica que está escribiendo

  try {
    const query = text
    const prompt = `${basePrompt}. Responde lo siguiente: ${query}`
    const response = await luminsesi(query, username, prompt)
    await conn.reply(m.chat, response, m)
  } catch (error) {
    console.error('*[ ℹ️ ] Error al obtener la respuesta:*', error)
    await conn.reply(m.chat, '*Error: intenta más tarde.*', m)
  }
}

handler.help = ['lu']
handler.tags = ['inteligencia']
handler.command = ['lu', 'lucia']
export default handler

async function luminsesi(q, username, logic) {
  try {
    const response = await axios.post("https://Luminai.my.id", {
      content: q,
      user: username,
      prompt: logic,
      webSearchMode: false
    })
    return response.data.result
  } catch (error) {
    console.error('*[ ℹ️ ] Error al obtener:*', error)
    throw error
  }
}