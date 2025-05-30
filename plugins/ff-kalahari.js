var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

    const pp = 'https://i.ibb.co/f8MkHdV/mapa-de-versus-kalahari-768x768.png';

    const groupAdmins = participants.filter(p => p.admin);

    const listaAdmins = groupAdmins.map((v, i) => ``).join('\n');

    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';

    let texto = `*MAPA KALAHARI* ✅`.trim();

    conn.sendFile(m.chat, pp, 'error.jpg', texto, m, true, { mentions: [...groupAdmins.map(v => v.id), owner] });

};

handler.tags = ['ffvs'];

handler.command = /^(mapakalahari|kalahari|kalahar|kalaharii|kalajari)$/i; // Sin opción vacía al final

handler.admin = true;

handler.group = true;

export default handler;
