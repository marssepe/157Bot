const handler = async (m, { conn }) => {
const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

  conn.sendMessage(m.chat, {
text: `🍒 ¡𝑩𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒐! ${taguser}\n\n¿𝘘𝘶𝘪𝘦𝘳𝘦𝘴 𝘥𝘰𝘮𝘪𝘯𝘢𝘳 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘤𝘰𝘯 𝘦𝘭 𝘣𝘰𝘵 𝘮á𝘴 𝘱𝘰𝘥𝘦𝘳𝘰𝘴𝘰? ¡ᏢᏗᏁᏖᏂᏋᏫᏁ ᏴᏫᏖ está aquí! 🔥\n\n🔹 *ᴘʀᴇᴄɪᴏs ᴅᴇʟ ʙᴏᴛ* 🔹\n\n🌀 ᴘᴇʀᴍᴀɴᴇɴᴛᴇ\n> 🔹 *𝙐𝙉 𝙂𝙍𝙐𝙋𝙊:* 𝟹 🇺🇸 / 12.800 🇨🇴 / 𝟷𝟷 🇵🇪 / 3400 🇦🇷 / 60 🇲🇽 / 2900 🇨🇱\n>\n> 🔹 *𝘿𝙊𝙎 𝙂𝙍𝙐𝙋𝙊𝙎:* 𝟼 🇺🇸 / 25.600 🇨🇴 / 𝟸𝟸 🇵🇪 / 6700 🇦🇷 / 𝟷20 🇲🇽 / 5700 🇨🇱\n> 🔹 *𝙏𝙍𝙀𝙎 𝙂𝙍𝙐𝙋𝙊𝙎 + 𝙐𝙉 𝘽𝙊𝙏 𝘿𝙀 𝙍𝙀𝙂𝘼𝙇𝙊:* 𝟾 🇺🇸 / 34.000 🇨🇴 / 𝟹𝟶 🇵🇪 / 8900 🇦🇷 / 𝟷60 🇲🇽 / 7600 🇨🇱\n\n🌀 ᴘᴇʀsᴏɴᴀʟɪᴢᴀᴅᴏ\n> 🔹 *𝙋𝘼𝙂𝙊 𝙄𝙉𝙄𝘾𝙄𝘼𝙇:* 𝟷𝟻 🇺🇸 / 63.800 🇨🇴 / 55 🇵🇪 / 16.700 🇦🇷 / 𝟹𝟶𝟶 🇲🇽 / 14.200 🇨🇱\n> 🔹 *𝙋𝘼𝙂𝙊 𝙈𝙀𝙉𝙎𝙐𝘼𝙇:* 𝟻 🇺🇸 / 21.300 🇨🇴 / 𝟸𝟶 🇵🇪 / 5600 🇦🇷 / 𝟷𝟶𝟶 🇲🇽 / 4800 🇨🇱\n\n🔗 𝙋𝙍𝙐𝙀𝘽𝘼 & 𝘾𝙊𝙈𝙋𝙍𝘼\nhttps://chat.whatsapp.com/HvDCvNqXSiW19MFXJmWhoF\n\n> © 𝙋𝙖𝙣𝙩𝙝𝙚𝙤𝙣 𝘽𝙤𝙩 🔥`,
mentions: [m.sender]
}, { quoted: fkontak });
};
handler.command = ['precios', 'comprar', 'adquirir'];
export default handler;
