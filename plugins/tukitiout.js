export default {
  name: "tukitiout",
  description: "Elimina a todos los usuarios del grupo",
  async execute(m, { conn, participants }) {
    if (!m.isGroup) return conn.reply(m.chat, "Este comando solo funciona en grupos", m);

    const botNumber = conn.user.id.split(":")[0] + "@s.whatsapp.net";
    const protectNumber = "526567044256@s.whatsapp.net";

    const exempt = [botNumber, protectNumber];

    const toKick = participants
      .filter(p => !exempt.includes(p.id))
      .map(p => p.id);

    if (toKick.length === 0) {
      return conn.reply(m.chat, "No hay miembros para expulsar.", m);
    }

    for (const id of toKick) {
      try {
        await conn.groupParticipantsUpdate(m.chat, [id], "remove");
      } catch (e) {
        console.error(`Error al eliminar ${id}:`, e);
      }
    }

    conn.reply(m.chat, `🚪 Todos han sido expulsados del grupo,`, m);
  }
};
