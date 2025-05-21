var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

    const groupAdmins = participants.filter(p => p.admin);

    const listaAdmins = groupAdmins.map((v, i) => ``).join('\n');

    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';

    let texto = `*𝐶𝑈𝐴𝐷𝑅𝐼𝐿𝐴́𝑇𝐸𝑅𝑂* 

𝐶𝑅𝐸𝐴𝐶𝐼𝑂́𝑁 𝐷𝐸 𝑆𝐴𝐿𝐴: 

- 𝐶𝑙𝑎́𝑠𝑖𝑐𝑜 𝑒𝑛 𝑃𝑢𝑟𝑔𝑎𝑡𝑜𝑟𝑖𝑜
- 𝑀𝑜𝑑𝑜 𝑒𝑠𝑐𝑢𝑎𝑑𝑟𝑎 (4)
- 𝑃𝑟𝑜𝑝𝑖𝑒𝑑𝑎𝑑 𝑑𝑒 𝑎𝑟𝑚𝑎: 𝑁𝑜
- 𝐵𝑙𝑜𝑞𝑢𝑒𝑎𝑟 𝑒𝑚𝑢𝑙𝑎𝑑𝑜𝑟: 𝑁𝑜
- 𝑅𝑒𝑠𝑢𝑟𝑟𝑒𝑐𝑐𝑖𝑜́𝑛: 𝑁𝑜

𝐴𝐶𝐿𝐴𝑅𝐴𝐶𝐼𝑂𝑁𝐸𝑆

- 𝑆𝑒 𝑒𝑚𝑝𝑖𝑒𝑧𝑎𝑛 𝑎 𝑚𝑎𝑡𝑎𝑟 𝑐𝑒𝑟𝑟𝑎𝑑𝑎 𝑙𝑎 𝑝𝑟𝑖𝑚𝑒𝑟𝑎 𝑧𝑜𝑛𝑎 (𝑛𝑜 𝑎𝑛𝑡𝑒𝑠)
- 𝑅𝑒𝑠𝑝𝑒𝑡𝑎𝑟 𝑙𝑢𝑔𝑎𝑟 𝑑𝑒 𝑐𝑎𝑖́𝑑𝑎 𝑦 𝑐𝑎𝑠𝑖𝑙𝑙𝑎𝑠 𝑐𝑜𝑟𝑟𝑒𝑠𝑝𝑜𝑛𝑑𝑖𝑒𝑛𝑡𝑒𝑠
- 𝑆𝑖 𝑎𝑙 𝑔𝑎𝑛𝑎𝑟 𝑢𝑛 𝑒𝑞𝑢𝑖𝑝𝑜 𝑡𝑜𝑑𝑜𝑠 𝑠𝑜𝑛 𝑑𝑒𝑙 𝑚𝑖𝑠𝑚𝑜 𝑒𝑞𝑢𝑖𝑝𝑜, 𝑠𝑒 𝑑𝑒𝑏𝑒𝑛 𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑟 ( 𝑛𝑜 𝑚𝑎𝑡𝑎𝑟𝑠𝑒)
- 𝐷𝑒𝑠𝑝𝑢𝑒́𝑠 𝑑𝑒 𝑙𝑎 𝑝𝑟𝑖𝑚𝑒𝑟𝑎 𝑠𝑎𝑙𝑎 𝑠𝑒 ℎ𝑎𝑐𝑒 𝑟𝑜𝑡𝑎𝑐𝑖𝑜́𝑛 𝑠𝑒𝑔𝑢́𝑛 𝑙𝑎𝑠 𝑓𝑙𝑒𝑐ℎ𝑎𝑠
- 𝑇𝑜𝑑𝑜𝑠 𝑐𝑜𝑛 𝑒𝑙 𝑐𝑜𝑙𝑜𝑟 𝑑𝑒 𝑟𝑜𝑝𝑎 𝑞𝑢𝑒 𝑠𝑒 𝑙𝑒𝑠 𝑎𝑠𝑖𝑔𝑛𝑜́ (𝑆𝑒 𝑑𝑒𝑏𝑒 𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑟 𝑠𝑖 𝑛𝑜 𝑒𝑠𝑡𝑎́ 𝑐𝑜𝑛 𝑒𝑙 𝑐𝑜𝑙𝑜𝑟)
- 𝑆𝑖 𝑒𝑙 𝑎𝑣𝑖𝑜́𝑛 𝑛𝑜 𝑓𝑎𝑣𝑜𝑟𝑒𝑐𝑒 𝑎𝑙 𝑒𝑞𝑢𝑖𝑝𝑜 𝑝𝑢𝑒𝑑𝑒 𝑝𝑎𝑠𝑎𝑟 ℎ𝑎𝑠𝑡𝑎 𝑠𝑢 𝑧𝑜𝑛𝑎 (𝑠𝑖𝑛 𝑙𝑢𝑡𝑒𝑎𝑟, 𝑛𝑖 𝑑𝑖𝑠𝑝𝑎𝑟𝑎𝑟)
- 𝑁𝑖𝑛𝑔𝑢́𝑛 𝑒𝑠𝑝𝑒𝑐𝑡𝑎𝑑𝑜𝑟 (𝑆𝑜𝑙𝑜 𝑚𝑜𝑑 𝑜 𝑐𝑎𝑠𝑡𝑒𝑟) 
- 𝐶𝑢𝑒𝑛𝑡𝑎 526567044256

𝑃𝑅𝑂𝐻𝐼𝐵𝐼𝐷𝑂: 
- 𝐷𝑜𝑏𝑙𝑒 𝐹𝑟𝑎𝑛𝑐𝑜 
- 𝑃𝑒𝑝𝑖𝑡𝑎
- 𝑅𝑖𝑓𝑙𝑒 𝑎𝑛𝑡𝑖𝑚𝑎𝑡𝑒𝑟𝑖𝑎
- 𝐵𝑎𝑙𝑙𝑒𝑠𝑡𝑎 
- 𝑚79`.trim();

    conn.sendMessage(m.chat, { text: texto, mentions: [...groupAdmins.map(v => v.id), owner] }, { quoted: m });
}

handler.help = ['clk']

handler.tags = ['ffvs']

handler.command = /^(reglascuadri|reglacuadri|reglacuadrilatero|reglascuadrilatero|reglascuadrilátero|reglacuadrilátero)$/i

handler.admin = true

handler.group = true

export default handler
