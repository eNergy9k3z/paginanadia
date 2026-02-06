
import React, { useState, useEffect, useRef } from 'react';

const Chatbot = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { text: "Hola 👋 Soy el asistente virtual de la Dra. Nadia. ¿En qué puedo ayudarte hoy?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    // Normalizar texto: minúsculas y sin acentos
    const normalize = (text) => {
        return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    // "Cerebro" del bot: Palabras clave y respuestas ampliada
    const knowledgeBase = [
        // SALUDOS Y CORTESÍA
        {
            keywords: ['hola', 'buenos', 'buenas', 'que tal', 'hey'],
            response: "¡Hola! 👋 Qué gusto saludarte. Soy el asistente virtual de la Dra. Nadia. ¿En qué puedo apoyarte hoy?"
        },
        {
            keywords: ['gracias', 'agradez', 'grx'],
            response: "¡Es un placer! 😊 Recuerda que estoy aquí para resolver tus dudas sobre salud metabólica y nuestras cetonas."
        },
        {
            keywords: ['adios', 'bye', 'hasta luego', 'nos vemos'],
            response: "¡Hasta pronto! Recuerda tomar tus cetonas y mantenerte hidratada. 💧"
        },
        {
            keywords: ['si', 'esta bien', 'ok', 'vale', 'claro'],
            response: "¡Perfecto! ¿Tienes alguna otra pregunta específica en la que pueda ayudarte?"
        },
        {
            keywords: ['no', 'ninguna', 'nada'],
            response: "Entendido. Si se te ocurre algo más tarde, aquí estaré. ¡Que tengas un día lleno de energía! ⚡"
        },

        // USO (Cómo se usa, dosis, etc)
        {
            keywords: ['usa', 'usar', 'uso', 'consumir', 'beber', 'toma', 'tomar', 'preparacion', 'mezclar', 'dosis'],
            response: "El modo de uso es muy sencillo: 🥤 Disuelve 1 sobre en 500-700ml de agua fría con hielos. Agita bien y bébelo en un lapso de 20-30 minutos. Lo ideal es tomarlo en ayunas por la mañana."
        },
        {
            keywords: ['frecuencia', 'veces', 'dia', 'diario'],
            response: "La mayoría de las personas obtienen excelentes resultados con 1 sobre al día. Si buscas un rendimiento atlético superior o una pérdida de grasa acelerada, puedes tomar 2 al día (uno en la mañana y otro en la tarde)."
        },
        {
            keywords: ['cuanto tarda', 'tiempo', 'efecto', 'rapido', 'funciona'],
            response: "Entrarás en estado de cetosis en menos de 60 minutos ⏱️. La energía y claridad mental se sienten casi de inmediato. La pérdida de grasa visible varía, pero usualmente se nota desde los primeros 10 días de uso constante."
        },
        {
            keywords: ['rebote', 'dejar de tomar', 'suspender'],
            response: "No hay 'rebote' químico ni dependencia. Si dejas de tomarlas, simplemente tu cuerpo vuelve a su estado metabólico anterior. Si mantienes buenos hábitos de alimentación, conservarás tus resultados."
        },

        // INFORMACIÓN DE PRODUCTO
        {
            keywords: ['que son', 'que es', 'ketones', 'cetonas', 'producto', 'sirve', 'beneficios'],
            response: "Las cetonas exógenas R-BHB son bio-idénticas (iguales a las que produce tu cuerpo naturalemnte). Su función principal es ponerte en estado de cetosis en <60 min, brindándote: \n⚡ Energía sostenida\n🧠 Enfoque mental\n🔥 Quema de grasa\n...todo eso sin dietas extremas."
        },
        {
            keywords: ['sabores', 'sabor', 'ricos', 'gusto', 'variedad'],
            response: "¡Son deliciosos! 😋 Los más populares son Lima-Limón 🍋 y Fruit Punch 🍒. También tenemos Trufa de Chocolate, y sabores de temporada como Hibiscus y Berry. ¿Te gustaría saber cuál es mi favorito?"
        },
        {
            keywords: ['cafeina', 'charged', 'energia', 'altera', 'dormir'],
            response: "Manejamos dos versiones: \n1. **Charged** (con cafeína) para un boost de energía extra en la mañana. \n2. **Caffeine Free** (sin cafeína) ideal para la tarde, niños, o personas sensibles a los estimulantes."
        },
        {
            keywords: ['ingredientes', 'contiene', 'componentes', 'quimicos'],
            response: "Nuestras cetonas son 100% naturales, fermentadas naturalmente y bio-idénticas. No contienen colorantes artificiales y son endulzadas con estevia o eritritol dependiendo la versión."
        },

        // PRECIOS Y PAGOS
        {
            keywords: ['precio', 'costo', 'valor', 'cuesta', 'dinero', 'presupuesto'],
            response: "El 'Starter Pack' (Caja con 20 sobres) ronda los $2,500 MXN. Sin embargo, tenemos promociones frecuentes y descuentos por volumen. Te invito a ver la sección 'Tienda' para los precios exactos de hoy."
        },
        {
            keywords: ['pagar', 'pago', 'tarjeta', 'transferencia', 'efectivo', 'metodos'],
            response: "Aceptamos todas las tarjetas de crédito y débito (Visa, Mastercard, Amex), PayPal y transferencias bancarias. Tu compra es 100% segura."
        },
        {
            keywords: ['meses', 'plazos', 'credito'],
            response: "Sí, frecuentemente ofrecemos meses sin intereses con tarjetas participantes y PayPal. Verifica las opciones al momento del checkout."
        },

        // ALIMENTACIÓN
        {
            keywords: ['dieta', 'comer', 'keto', 'alimentacion', 'sigo comiendo', 'harinas', 'azucar'],
            response: "¡La magia es que NO necesitas una dieta keto estricta! 🥗 Las cetonas te dan los beneficios metabólicos de igual forma. Sin embargo, si reduces tu consumo de azúcares y harinas refinadas, verás resultados mucho más rápido."
        },
        {
            keywords: ['alcohol', 'cerveza', 'vino', 'tomar'],
            response: "Puedes consumir alcohol con moderación, pero ten en cuenta que el alcohol pausa el proceso de quema de grasa hasta que se elimina del cuerpo. Opta por destilados claros (tequila, vodka) con agua mineral."
        },

        // SALUD Y SEGURIDAD
        {
            keywords: ['diabetes', 'diabetico', 'azucar', 'insulina', 'glucosa'],
            response: "Son excelentes aliadas para mejorar la sensibilidad a la insulina y estabilizar la glucosa. Sin embargo, si tienes una condición médica, siempre consulta a tu médico antes de iniciar."
        },
        {
            keywords: ['hipertension', 'presion', 'corazon'],
            response: "Nuestra fórmula contiene sales minerales (electrolitos). Si tienes hipertensión controlada no suele haber problema, pero consulta a tu médico sobre tu ingesta de sodio."
        },
        {
            keywords: ['embarazo', 'lactancia', 'bebe', 'amamantando'],
            response: "Aunque muchas mamás las toman por la energía extra que necesitan, por protocolo de seguridad siempre recomendamos consultarlo previamente con tu ginecólogo o pediatra."
        },
        {
            keywords: ['ayuno', 'intermitente', 'rompe'],
            response: "¡Son las mejores amigas del ayuno! 🌙 No rompen tu ayuno metabólico y te ayudan a extenderlo más horas sin sentir hambre ni ansiedad."
        },

        // NEGOCIO Y ENVÍOS
        {
            keywords: ['envio', 'donde llega', 'mexico', 'pais', 'lugar', 'domicilio'],
            response: "Enviamos a todo México 🇲🇽, Estados Unidos 🇺🇸 y gran parte de Europa 🇪🇺. El tiempo promedio de entrega es de 3 a 5 días hábiles hasta la puerta de tu casa."
        },
        {
            keywords: ['vender', 'distribui', 'negocio', 'unirme', 'equipo', 'ganar'],
            response: "¡Nos encanta crecer la comunidad! 🚀 Si te interesa distribuir y generar ingresos adicionales, escríbenos por WhatsApp; tenemos un plan de compensación muy atractivo."
        },

        // DRA NADIA
        {
            keywords: ['dra', 'nadia', 'quien es', 'experiencia', 'estudios'],
            response: "La Dra. Nadia Sánchez Cano es experta en medicina funcional, salud hormonal y terapias regenerativas, con más de 15 años transformando la vida de mujeres."
        },
        {
            keywords: ['cita', 'consulta', 'agendar', 'verla'],
            response: "La Dra. tiene agenda limitada para consultas 1 a 1. Por favor contáctanos directo al WhatsApp para verificar disponibilidad y costos de consulta médica personalizada."
        }
    ];

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        const userMsg = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);

        // Process response
        const normalizedInput = normalize(input);

        let botResponse = "Interesante pregunta. 🤔 Mis respuestas automáticas son limitadas, pero la Dra. Nadia o su equipo pueden responderte con detalle.\n\n👉 Escríbenos al WhatsApp (botón verde) para atención personalizada.";

        // Logic to find match using normalized input
        const found = knowledgeBase.find(item =>
            item.keywords.some(keyword => normalizedInput.includes(normalize(keyword)))
        );

        if (found) {
            botResponse = found.response;
        }

        // Add bot response with delay
        setTimeout(() => {
            setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
        }, 600);

        setInput('');
    };

    return (
        <div className="chat-window">
            <div className="chat-header">
                <div className="chat-title">
                    <span className="dot-online"></span> 🤖 Asistente Dra. Nadia
                </div>
                <button onClick={onClose} className="close-chat">×</button>
            </div>

            <div className="chat-messages">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <form className="chat-input-area" onSubmit={handleSend}>
                <input
                    type="text"
                    placeholder="Escribe tu pregunta..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">➤</button>
            </form>

            <style jsx>{`
         .chat-window {
            position: fixed; /* Relative to parent container in usage */
            bottom: 200px;
            right: 0;
            width: 320px;
            height: 450px;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            border: 1px solid #eee;
            animation: slideUp 0.3s ease;
         }
         
         @keyframes slideUp {
             from { opacity: 0; transform: translateY(20px); }
             to { opacity: 1; transform: translateY(0); }
         }

         .chat-header {
            background: var(--dark);
            color: var(--white);
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid var(--secondary);
         }

         .chat-title { font-weight: 600; display: flex; align-items: center; gap: 8px; }
         .dot-online { width: 8px; height: 8px; background: #25D366; border-radius: 50%; display: inline-block; }
         .close-chat { background: none; border: none; color: #fff; font-size: 24px; cursor: pointer; line-height: 1; }

         .chat-messages {
            flex: 1;
            padding: 15px;
            overflow-y: auto;
            background: #f9f9f9;
            display: flex;
            flex-direction: column;
            gap: 10px;
         }

         .message {
            max-width: 80%;
            padding: 10px 14px;
            border-radius: 12px;
            font-size: 0.9rem;
            line-height: 1.4;
         }

         .message.bot {
            align-self: flex-start;
            background: #eef;
            color: #333;
            border-bottom-left-radius: 2px;
         }

         .message.user {
            align-self: flex-end;
            background: var(--secondary);
            color: var(--dark);
            border-bottom-right-radius: 2px;
            font-weight: 500;
         }

         .chat-input-area {
            padding: 10px;
            border-top: 1px solid #eee;
            display: flex;
            gap: 10px;
            background: #fff;
         }

         .chat-input-area input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 20px;
            outline: none;
            font-size: 0.9rem;
         }
         
         .chat-input-area input:focus { border-color: var(--secondary); }

         .chat-input-area button {
            background: var(--dark);
            color: var(--secondary);
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            transition: transform 0.2s;
         }
         
         .chat-input-area button:hover { transform: scale(1.1); }

         @media (max-width: 480px) {
             .chat-window {
                 width: 90vw;
                 bottom: 160px;
                 right: 5vw;
                 height: 60vh;
             }
         }
       `}</style>
        </div>
    );
};

export default Chatbot;
