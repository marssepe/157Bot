export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isRowner, isMods}) {
  if (m.isBaileys && m.fromMe) return true;
  if (m.isGroup) return false;
  if (!m.message) return true;
  if (
    m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||
    m.text.includes('157Bot') || m.text.includes('code') || m.text.includes('qr')
  ) return true;

  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};

  if (bot.antiPrivate && !isOwner && !isRowner && !isMods) {
    await m.reply(
      `> 《★》@${m.sender.split`@`157Bot` +
      `157Bot` +
      `> Para seguir nuestro canal oficial, haz clic aquí: ${channel}`,
      false,
      { mentions: [m.sender] }
    );
    await this.updateBlockStatus(m.chat, 'block');
  }
  return false;
}
