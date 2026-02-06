
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

        // PRODUCTOS Y SABORES
        {
            keywords: ['precio', 'costo', 'cuanto vale', 'valor', 'cuánto cuesta', 'precios'],
            response: "Nuestros precios varían según el paquete. El 'Starter Pack' ronda los $2,500 MXN. Te recomiendo visitar nuestra sección de 'Tienda' para ver promociones actuales."
        },
        {
            keywords: ['que son', 'qué son', 'ketones', 'cetonas', 'producto', 'sirve'],
            response: "Las cetonas exógenas R-BHB son bio-idénticas (iguales a las que produce tu cuerpo). Te ponen en estado de cetosis en <60 min, dándote energía, enfoque y quema de grasa sin dietas extremas."
        },
        {
            keywords: ['sabores', 'sabor', 'ricos', 'gusto'],
            response: "¡Son deliciosos! Tenemos Lima-Limón, Fruit Punch, Trufa de Chocolate, y sabores de temporada como Hibiscus y Berry. ¿Cuál te llama más la atención?"
        },
        {
            keywords: ['cafeina', 'energia', 'altera'],
            response: "Tenemos versiones con cafeína (Charged) para un boost extra, y versiones sin cafeína (Caffeine Free) ideales para la tarde o personas sensibles."
        },

        // USO Y DIETA
        {
            keywords: ['dieta', 'comer', 'keto', 'alimentacion', 'sigo comiendo', 'restriccion'],
            response: "¡La magia es que NO necesitas una dieta keto estricta! Las cetonas te dan los beneficios metabólicos de igual forma. Sin embargo, reducir azúcares y harinas acelerará tus resultados."
        },
        {
            keywords: ['dosis', 'como tomar', 'tomar', 'preparacion', 'mezclar', 'hora'],
            response: "Simple: Diluye 1 sobre en 500-700ml de agua fría con hielos. Agita bien y bébelo en un lapso de 20-30 min. Lo ideal es en ayunas por la mañana."
        },
        {
            keywords: ['cuanto tarda', 'tiempo', 'efecto', 'rapido'],
            response: "Entras en cetosis en menos de 60 minutos. La energía y claridad mental se sienten casi de inmediato. La pérdida de grasa visible varía, pero usualmente se nota desde los primeros 10 días."
        },
        {
            keywords: ['rebote', 'dejar de tomar'],
            response: "No hay 'rebote' químico. Si dejas de tomarlas, simplemente vuelves a tu estado metabólico anterior. Si mantienes buenos hábitos, conservarás tus resultados."
        },

        // SALUD Y CONTRAINDICACIONES
        {
            keywords: ['diabetes', 'diabetico', 'azucar', 'insulina'],
            response: "Son excelentes para apoyar la sensibilidad a la insulina. Sin embargo, si tienes condiciones médicas preexistentes, siempre consulta a tu médico antes de iniciar."
        },
        {
            keywords: ['embarazo', 'lactancia', 'bebe', 'amamantando'],
            response: "Muchas mamás las toman por la energía extra, pero por protocolo siempre recomendamos consultarlo con tu ginecólogo o pediatra primero."
        },
        {
            keywords: ['niños', 'hijos', 'edad'],
            response: "Son seguras, pero para menores de edad recomendamos dosis reducidas y siempre bajo supervisión de un adulto o profesional de salud."
        },
        {
            keywords: ['ayuno', 'intermitente', 'rompe'],
            response: "¡Son las mejores amigas del ayuno! No rompen tu ayuno metabólico y te ayudan a extenderlo sin hambre ni ansiedad."
        },

        // NEGOCIO Y ENVÍOS
        {
            keywords: ['envio', 'envío', 'donde llega', 'mexico', 'pais', 'lugar'],
            response: "Enviamos a todo México, Estados Unidos, Canadá y gran parte de Europa. El tiempo promedio es de 3 a 5 días hábiles a tu domicilio."
        },
        {
            keywords: ['vender', 'distribuid', 'negocio', 'unirme', 'equipo'],
            response: "¡Nos encanta crecer la comunidad! Si te interesa distribuir y generar ingresos, escríbenos por WhatsApp para explicarte el modelo de negocio."
        },

        // DRA NADIA
        {
            keywords: ['dra', 'nadia', 'quien es', 'experiencia', 'estudios'],
            response: "La Dra. Nadia Sánchez Cano es experta en medicina funcional, salud hormonal y terapias regenerativas, con más de 15 años transformando la vida de mujeres."
        },
        {
            keywords: ['cita', 'consulta', 'agendar', 'verla'],
            response: "La Dra. tiene agenda limitada. Por favor contáctanos directo al WhatsApp para verificar disponibilidad de consultas 1 a 1."
        },
        {
            keywords: ['hormona', 'pms', 'sop', 'menopausia', 'mujer', 'inflama'],
            response: "Es nuestra especialidad. Las cetonas son potentes antiinflamatorios que ayudan mucho a regular síntomas de SOP, menopausia y desbalances hormonales."
        }
    ];

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        const userMsg = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);

        // Process response
        const lowerInput = input.toLowerCase();
        let botResponse = "Interesante pregunta. 🤔 Para darte la mejor respuesta personalizada, ¿te importaría enviarnos un mensajito por WhatsApp? El botón verde está justo aquí abajo.";

        // Logic to find match (prioritize matches with more keywords matched if possible, but simple find is ok for now)
        const found = knowledgeBase.find(item =>
            item.keywords.some(keyword => lowerInput.includes(keyword))
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
                    <span className="dot-online"></span> Asistente Dra. Nadia
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
            bottom: 110px;
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
                 bottom: 120px;
                 right: 5vw;
                 height: 60vh;
             }
         }
       `}</style>
        </div>
    );
};

export default Chatbot;
