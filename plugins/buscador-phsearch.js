
import cheerio from 'cheerio';
import axios from 'axios';

let handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!db.data.chats[m.chat].nsfw && m.isGroup) {
    return conn.reply(m.chat, '*[ ℹ️ ] El contenido `526567044256` está desactivado para este chat.*\n> ᥙsᥱ *enable nsfw* ⍴ᥲrᥲ ᥲᥴ𝗍і᥎ᥲrᥣ᥆.', m);
  } 

  if (!args[0]) {
    return conn.reply(m.chat, `*[ 🔎 ] Por favor, ingrese la búsqueda que desea realizar en PornHub.*\n\n*[ 💡 ] Ejemplo:* ${usedPrefix + command} Gótica Culona.`, m);
  }

  try {
    let searchResults = await searchPornhub(args[0]);
    let teks = searchResults.result.map((v, i) => 
      `*\`BUSCADOR - PORNHUB\`*
🎞️ *Título:* ${v.title}
🕒 *Duración:* ${v.duration}
🔗 *Link:* ${v.url}
------------------------------------\n`).join('\n\n');

    if (searchResults.result.length === 0) {
      teks = '*[ ⚠️ ] No se encontraron resultados...*';
    }

    conn.reply(m.chat, teks, m);
  } catch (e) {
    return conn.reply(m.chat, `*[ ❌ ] Ocurrió un error:* ${e.message}`, m);
  }
};

handler.tags = ['nsfw']; 
handler.help = ['pornhubsearch']; 
handler.command = ['phsearch', 'pornhubsearch'];
handler.register = true;
export default handler;

async function searchPornhub(search) {
  try {
    const response = await axios.get(`https://www.pornhub.com/video/search?search=${search}`);
    const html = response.data;
    const $ = cheerio.load(html);
    const result = [];

    $('ul#videoSearchResult > li.pcVideoListItem').each(function(a, b) {
      const _title = $(b).find('a').attr('title');
      const _duration = $(b).find('var.duration').text().trim();
      const _views = $(b).find('var.views').text().trim();
      const _url = 'https://www.pornhub.com' + $(b).find('a').attr('href');
      const hasil = { title: _title, duration: _duration, views: _views, url: _url };
      result.push(hasil);
    });

    return { result };
  } catch (error) {
    console.error('*[ ❌ ] Ocurrió un error al buscar en Pornhub:*', error);
    return { result: [] };
  }
}