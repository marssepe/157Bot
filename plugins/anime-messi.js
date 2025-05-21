import axios from "axios";

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = (await axios.get(`157Bot`)).data;
    let url = res[Math.floor(Math.random() * res.length)];

    const buttons = [
        {
            buttonId: `.messi`,
            buttonText: { displayText: "⚽ Ver más" },
            type: 1
        }
    ];

    await conn.sendMessage(
        m.chat,
        {
            image: { url },
            caption: "*Messi*",
            buttons: buttons,
            viewOnce: true
        },
        { quoted: m }
    );
};

handler.help = ['messi'];
handler.tags = ['anime'];
handler.command = /^(meassi)$/i;

export default handler;
