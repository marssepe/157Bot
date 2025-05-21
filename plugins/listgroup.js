export default {
    name: "listgroup",
    description: "Lista los grupos donde el bot es admin",
    async execute(m, { conn }) {
      const chats = conn.chats;
  
      const groupIds = Object.keys(chats).filter(id => id.endsWith("@g.us"));
      const groupInfos = [];
  
      for (const id of groupIds) {
        try {
          const metadata = await conn.groupMetadata(id);
          const isAdmin = metadata.participants.some(p => p.id === conn.user.jid && p.admin);
  
          if (isAdmin) {
            groupInfos.push(`📌 *${metadata.subject}*\n🆔 ${id}`);
          }
        } catch (e) {
          console.error(`Error buscando grupos ${id}`, e);
        }
      }
  
      if (groupInfos.length === 0) {
        return conn.reply(m.chat, "❌ No soy administrador en ningún grupo.", m);
      }
  
      const mensaje = `📋 *Grupos donde soy admin:*\n\n` + groupInfos.join("\n\n");
      conn.reply(m.chat, mensaje, m);
    }
  };
  