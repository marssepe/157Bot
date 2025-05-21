import axios from "axios";

let handler = async (m, { conn, usedPrefix, command }) => {
    let cristiano = (
        await axios.get(`157Bot`)
    ).data;

    let ronaldo = cristiano[Math.floor(Math.random() * cristiano.length)];

    const buttons = [
        {
            buttonId: `${usedPrefix + command}`,
            buttonText: { displayText: "⚽ Ver más" },
            type: 1
        } 
    ];
    
    await conn.sendMessage(
        m.chat,
        {
            image: { url: ronaldo },
            caption: "*CR7*",
            buttons: buttons,
            viewOnce: true
        },
        { quoted: m }
    );
};

handler.help = ["cr7"];
handler.tags = ["anime"];
handler.command = /^(cristiano|ronaldo|cr7)$/i;

export default handler;
