import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
   await m.react('☕');

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = await conn.getName(who);
    let edtr = `@${m.sender.split`@`[0]}`;
    let username = conn.getName(m.sender);

    // VCARD
    let list = [{
        displayName: "Pantheon-OFC 🎩",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN: Pantheon-OFC\nTEL;waid=584262668729:584262668729\nEND:VCARD`,
    }];

    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: `${list.length} Contacto`,
            contacts: list
        },
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: '¡Hola! ʏᴏ sᴏʏ ᴇʟ ᴄʀᴇᴀᴅᴏʀ ᴅᴇ Pᴀɴᴛʜᴇᴏɴ Bᴏᴛ!',
                body: dev,
                thumbnailUrl: 'https://files.catbox.moe/kmfqee.jpg',
                sourceUrl: 'https://526567044256?text=Vengo+Del+Comando+.owner',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });

    let txt = `👋 *Hola \`${username}\` este es*\n*el contacto de mi Marssepe

    await conn.sendMessage(m.chat, { text: txt });
};

handler.help = ['owner', 'Marssepe
handler.tags = ['info'];
handler.command = /^(owner|Marssepe

export default handler;
