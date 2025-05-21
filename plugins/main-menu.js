import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix, isPrems }) => {
  try {
    await m.react('🧡');

    let img = 'https://i.pinimg.com/736x/08/c2/8e/08c28e967d7d1502b822f204e4b6c27c.jpg';
    let insta = 'https://chat.whatsapp.com/HxE9YibMnVVAqo1IPvlbYu';

    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);

    const user = global.db.data.users[m.sender] || {};
    const { money = 0, joincount = 0, exp = 0, limit = 0, level = 0, role = '' } = user;

    let totalreg = Object.keys(global.db.data.users || {}).length;
    let rtotalreg = Object.values(global.db.data.users || {}).filter(user => user.registered).length;

    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

    const 157Bot

    const text = `
 *157*  *WHATSAPP BOT* 
Gracias Por Meterme Put@ ${taguser}*\n*${saludo}*

> ꒰꛱ ͜Desarrollado por *157* 526567044256

➔ \`157Bot
➔ \`Activo:\` ${uptime}  
➔ \`Usuarios:\` ${totalreg}  
➔ \`Versión:\` 1.5.7  

 Si encuentras un comando con errores no dudes en reportarlo con el Marssepe
${readMore}
 *\`MENÚS\`* 
卍‎ ${usedPrefix}menunsfw
卍‎ ${usedPrefix}menuowner
卍‎ ${usedPrefix}menulogos
卍‎ ${usedPrefix}menuff

↪; \`157Bot` ❞ 🍄︵᷼  
卍‎ ${usedPrefix}totalf
卍‎ ${usedPrefix}grupos
卍‎ ${usedPrefix}sugerir
卍‎ ${usedPrefix}report
卍‎ ${usedPrefix}owner
卍‎ ${usedPrefix}ping
卍‎ ${usedPrefix}uptime
卍‎ ${usedPrefix}horario
卍‎ ${usedPrefix}precios

↪; \`CONFIG\` ❞ 🪻︵᷼ 
卍‎ ${usedPrefix}enable *opción*
卍‎ ${usedPrefix}disable *opción*
卍‎ ${usedPrefix}on *opción*
卍‎ ${usedPrefix}off *opción*
卍‎ ${usedPrefix}manual

↪; \`DOWNLOAD\` ❞ 🪷︵᷼ 
卍‎ ${usedPrefix}play *texto*
卍‎ ${usedPrefix}ytmp4doc *texto*
卍‎ ${usedPrefix}ytmp3doc *texto*
卍‎ ${usedPrefix}apk *texto*
卍‎ ${usedPrefix}pinterest *texto*
卍‎ ${usedPrefix}pinvid *url*
卍‎ ${usedPrefix}ytv *url*
卍‎ ${usedPrefix}ytmp3 *url*
卍‎ ${usedPrefix}tiktok *url*
卍‎ ${usedPrefix}instagram *url*
卍‎ ${usedPrefix}facebook *url*
卍‎ ${usedPrefix}mediafire *url*
卍‎ ${usedPrefix}mega *url*
卍‎ ${usedPrefix}playstore *url*
卍‎ ${usedPrefix}xnxxdl *url*
卍‎ ${usedPrefix}xvideosdl *url*

↪; \`SEARCH\` ❞ 🍮︵᷼ 
卍‎ ${usedPrefix}aplaysearch *texto*
卍‎ ${usedPrefix}ttsearch *texto*
卍‎ ${usedPrefix}ttsearch2 *texto*
卍‎ ${usedPrefix}ytsearch *texto*
卍‎ ${usedPrefix}spotifysearch *texto*
卍‎ ${usedPrefix}playstoresearch *texto*
卍‎ ${usedPrefix}xnxxsearch *texto*
卍‎ ${usedPrefix}xvsearch *texto*
卍‎ ${usedPrefix}gnula *texto*
卍‎ ${usedPrefix}mercadolibre *texto*

↪; \`FRASES\` ❞ 
卍‎ ${usedPrefix}piropo
卍‎ ${usedPrefix}consejo
卍‎ ${usedPrefix}fraseromantica

↪; \`CONVERTERS\` ❞ 
卍‎ ${usedPrefix}tourl *img*
卍‎ ${usedPrefix}tourl *aud*
卍‎ ${usedPrefix}toptt *aud*
卍‎ ${usedPrefix}toptt *vid*
卍‎ ${usedPrefix}tourl *vid*
卍‎ ${usedPrefix}tomp3 *vid*
卍‎ ${usedPrefix}toimg *sticker*

↪; \`TOOLS\` ❞ 
卍‎ ${usedPrefix}clima *texto*
卍‎ ${usedPrefix}readmore *texto*
卍‎ ${usedPrefix}read *texto*
卍‎ ${usedPrefix}fake *texto + user + texto*
卍‎ ${usedPrefix}traducir *idioma + texto*
卍‎ ${usedPrefix}hd *img*
卍‎ ${usedPrefix}whatmusic *aud*
卍‎ ${usedPrefix}whatmusic *vid*
卍‎ ${usedPrefix}flag *país*
卍‎ ${usedPrefix}inspect *link*
卍‎ ${usedPrefix}inspeccionar *link*
卍‎ ${usedPrefix}nuevafotochannel
卍‎ ${usedPrefix}nosilenciarcanal
卍‎ ${usedPrefix}silenciarcanal
卍‎ ${usedPrefix}seguircanal
卍‎ ${usedPrefix}avisoschannel
卍‎ ${usedPrefix}resiviravisos
卍‎ ${usedPrefix}eliminarfotochannel
卍‎ ${usedPrefix}reactioneschannel
卍‎ ${usedPrefix}reaccioneschannel
卍‎ ${usedPrefix}nuevonombrecanal
卍‎ ${usedPrefix}nuevadescchannel

↪; \`GRUPOS\` ❞  
卍‎ ${usedPrefix}add *número*
卍‎ ${usedPrefix}grupo *abrir / cerrar*
卍‎ ${usedPrefix}grouptime *tiempo*
卍‎ ${usedPrefix}notify *texto*
卍‎ Aviso *texto*
卍‎ Admins *texto*
卍‎ ${usedPrefix}todos *texto*
卍‎ ${usedPrefix}setwelcome *texto*
卍‎ ${usedPrefix}setbye *texto*
卍‎ ${usedPrefix}setkick *texto*
卍‎ ${usedPrefix}groupdesc *texto*
卍‎ ${usedPrefix}setbye *texto*
卍‎ ${usedPrefix}promote *@tag*
卍‎ ${usedPrefix}demote *@tag*
卍‎ ${usedPrefix}kick *@tag*
卍‎ ${usedPrefix}mute *@tag*
卍‎ ${usedPrefix}inactivos *opción*
卍‎ ${usedPrefix}tagnum *prefix*
卍‎ ${usedPrefix}link
卍‎ ${usedPrefix}fantasmas

↪; \`EFFECTS\` ❞ 
卍‎ ${usedPrefix}bass *vid*
卍‎ ${usedPrefix}blown *vid*
卍‎ ${usedPrefix}deep *vid*
卍‎ ${usedPrefix}earrape *vid*
卍‎ ${usedPrefix}fast *vid*
卍‎ ${usedPrefix}smooth *vid*
卍‎ ${usedPrefix}tupai *vid*
卍‎ ${usedPrefix}nightcore *vid*
卍‎ ${usedPrefix}reverse *vid*
卍‎ ${usedPrefix}robot *vid*
卍‎ ${usedPrefix}slow *vid*
卍‎ ${usedPrefix}squirrel *vid*
卍‎ ${usedPrefix}chipmunk *vid*
卍‎ ${usedPrefix}reverb *vid*
卍‎ ${usedPrefix}chorus *vid*
卍‎ ${usedPrefix}flanger *vid*
卍‎ ${usedPrefix}distortion *vid*
卍‎ ${usedPrefix}pitch *vid*
卍‎ ${usedPrefix}highpass *vid*
卍‎ ${usedPrefix}lowpass *vid*
卍‎ ${usedPrefix}underwater *vid*

↪; \`FUN\` ❞ 🥥︵᷼ 
卍‎ ${usedPrefix}gay *@tag*
卍‎ ${usedPrefix}lesbiana *@tag*
卍‎ ${usedPrefix}pajero *@tag*
卍‎ ${usedPrefix}pajera *@tag*
卍‎ ${usedPrefix}puto *@tag*
卍‎ ${usedPrefix}puta *@tag*
卍‎ ${usedPrefix}manco *@tag*
卍‎ ${usedPrefix}manca *@tag*
卍‎ ${usedPrefix}rata *@tag*
卍‎ ${usedPrefix}prostituto *@tag*
卍‎ ${usedPrefix}prostituta *@tag*
卍‎ ${usedPrefix}doxear *@tag*
卍‎ ${usedPrefix}jalamela *@tag*
卍‎ ${usedPrefix}simi *texto*
卍‎ ${usedPrefix}pregunta *texto*
卍‎ ${usedPrefix}genio *texto*
卍‎ ${usedPrefix}top
卍‎ ${usedPrefix}sorteo
卍‎ ${usedPrefix}piropo
卍‎ ${usedPrefix}chiste
卍‎ ${usedPrefix}facto
卍‎ ${usedPrefix}verdad
卍‎ ${usedPrefix}pareja
卍‎ ${usedPrefix}parejas
卍‎ ${usedPrefix}love
卍‎ ${usedPrefix}personalidad

↪; \`GAME\` ❞ 🎋︵᷼ 
⠞🎋੭‎ ${usedPrefix}pregunta *texto*
⠞🎋੭‎ ${usedPrefix}ttt *texto*
⠞🎋੭‎ ${usedPrefix}ptt *opción*
⠞🎋੭‎ ${usedPrefix}delttt
⠞🎋੭‎ ${usedPrefix}acertijo

↪; \`ANIME\` ❞ 🌾︵᷼ 
卍‎ ${usedPrefix}messi
卍‎ ${usedPrefix}cr7

↪; \`GIFS NSFW\` ❞ 🔥︵᷼ 
卍‎ ${usedPrefix}violar *@tag*
卍‎ ${usedPrefix}follar *@tag*
卍‎ ${usedPrefix}anal *@tag*
卍‎ ${usedPrefix}coger *@tag*
卍‎ ${usedPrefix}coger2 *@tag*
卍‎ ${usedPrefix}penetrar *@tag*
卍‎ ${usedPrefix}sexo *@tag*
卍‎ ${usedPrefix}rusa *@tag*
卍‎ ${usedPrefix}sixnine *@tag*
卍‎ ${usedPrefix}pies *@tag*
卍‎ ${usedPrefix}mamada *@tag*
卍‎ ${usedPrefix}lickpussy *@tag*
卍‎ ${usedPrefix}grabboobs *@tag*
卍‎ ${usedPrefix}suckboobs *@tag*
卍‎ ${usedPrefix}cum *@tag*
卍‎ ${usedPrefix}fap *@tag*
卍‎ ${usedPrefix}manosear *@tag*
卍‎ ${usedPrefix}lesbianas *@tag*

↪; \`STICKERS\` ❞ 🦋︵᷼ 
卍‎ ${usedPrefix}sticker *img*
卍‎ ${usedPrefix}sticker *vid*
卍‎ ${usedPrefix}brat *texto*
卍‎ ${usedPrefix}qc *texto*
卍‎ ${usedPrefix}dado

↪; \`RPG\` ❞ 💸︵᷼ 
卍‎ ${usedPrefix}minar
卍‎ ${usedPrefix}cofre
卍 ${usedPrefix}slut
卍 ${usedPrefix}nivel
卍 ${usedPrefix}ruleta

↪; \`REGISTRO\` ❞ ☁️︵᷼ 
卍${usedPrefix}perfil
卍${usedPrefix}reg
卍${usedPrefix}unreg

↪; \`OWNER\` ❞ 👑︵᷼ 
卍 ${usedPrefix}salir
卍 ${usedPrefix}update
卍 ${usedPrefix}blocklist
卍 ${usedPrefix}grouplist
卍 ${usedPrefix}restart
卍 ${usedPrefix}join
卍 ${usedPrefix}chetar
卍 ${usedPrefix}unbanuser`.trim();

    conn.sendMessage(m.chat, {
      text: text,
      contextInfo: {
        mentionedJid: conn.parseMention(text),
        isForwarded: true,
        forwardingScore: 999,
        externalAdReply: {
          title: '',
          body: '157Bot',
          thumbnail: await (await fetch(img)).buffer(),
          sourceUrl: insta,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: fkontak });

  } catch (e) {
    conn.reply(m.chat, '❎ Error en el comando. Inténtalo más tarde.', m);
  }
};

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.fail = null;

export default handler;

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
