const handler = async (m, { conn, command, text }) => {
    // Validación de entrada
    if (!text) {
        return conn.sendMessage(m.chat, { 
            text: '*[ ℹ️ ] Por favor, menciona el nombre de la persona con quien deseas calcular el porcentaje de amor.*', 
            quoted: m 
        });
    }

    // Generación del porcentaje aleatorio
    const lovePercentage = Math.floor(Math.random() * 100);
    const isHighLove = lovePercentage >= 50;

    // Mensajes para resultados altos y bajos
    const loveMessages = [
        "¡Eso es un amor ardiente y apasionado! ¡Ve y díselo ahora mismo!",
        "Parece que hay una chispa entre ustedes dos. ¡Inténtalo!",
        "Podría haber algo especial aquí. ¡Dale una oportunidad!",
        "Hmm, el amor está en el aire. ¡Quizás sea hora de un café juntos!",
        "Las estrellas indican que hay un potencial romántico. ¡Haz un movimiento!",
        "Una historia de amor increíble podría estar esperando para ser escrita por ustedes.",
        "No subestimen el poder del tiempo y la paciencia en el amor. Grandes cosas pueden suceder.",
        "Recuerden que el amor es un viaje, y cada paso es valioso, sin importar la distancia.",
        "Las conexiones fuertes pueden convertirse en relaciones hermosas. ¡Sigan explorando!",
        "El amor verdadero a menudo requiere tiempo y esfuerzo. ¡No renuncien!",
    ];
    
    const notSoHighLoveMessages = [
        "A veces, la amistad es el comienzo de algo hermoso, pero no siempre se convierte en amor.",
        "El amor no es todo, ¡la amistad también es genial! Mantengan su amistad especial.",
        "Recuerda que las mejores relaciones comienzan con una buena amistad. ¡No subestimen su vínculo!",
        "A veces, el amor puede crecer con el tiempo. ¡Sigan fortaleciendo su conexión!",
        "La vida es una sorpresa, ¡quién sabe qué depara el futuro! No pierdan la esperanza.",
        "Aunque el amor no florezca como esperaban, su conexión sigue siendo valiosa.",
        "Los corazones pueden tardar en sincronizarse, pero eso no disminuye lo especial que son juntos.",
        "A pesar de los desafíos del amor, su amistad es un regalo que merece ser celebrado.",
        "El tiempo puede revelar cosas sorprendentes. ¡Sigamos explorando juntos!",
        "La vida está llena de giros inesperados. ¡Permanezcan abiertos a las posibilidades!",
    ];

    const loveDescription = isHighLove 
        ? "parecen tener una conexión profunda y un amor" 
        : "parecen tener una conexión especial, aunque su porcentaje de amor es";

    const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];
    const loveMessage = getRandomMessage(isHighLove ? loveMessages : notSoHighLoveMessages);

    const response = 
        `━━━━⬣ *💖 LOVE 💖* ⬣━━━━\n` +
        `*❥ En el universo del amor, ${text} y @${m.sender.split('@')[0]} ${loveDescription} del ${lovePercentage}% de un 100%.*\n\n` +
        `*💌 ${loveMessage}*\n` +
        `━━━━⬣ *💖 LOVE 💖* ⬣━━━━`;

    // Animación de carga
    async function loading() {
        const hawemod = [
            "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
            "《 ████▒▒▒▒▒▒▒▒》30%",
            "《 ███████▒▒▒▒▒》50%",
            "《 ██████████▒▒》80%",
            "《 ████████████》100%"
        ];
        
        // Enviar mensaje inicial
        let { key } = await conn.sendMessage(m.chat, { 
            text: "*💞 ¡Calculando Porcentaje! 💞*", 
            mentions: conn.parseMention(response) 
        }, { quoted: m });

        // Editar el mensaje en cada paso de la carga
        for (const progress of hawemod) {
            await new Promise(resolve => setTimeout(resolve, 1000)); 
            await conn.sendMessage(m.chat, { 
                text: progress, 
                edit: key, 
                mentions: conn.parseMention(response) 
            });
        }

        // Mensaje final con el resultado
        await conn.sendMessage(m.chat, { 
            text: response, 
            edit: key, 
            mentions: conn.parseMention(response) 
        });
    }

    loading();    
};

handler.help = ['love <nombre>'];
handler.tags = ['fun'];
handler.command = /^(love|amor)$/i;
export default handler;