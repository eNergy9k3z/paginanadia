
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

    // "Cerebro" del bot: Palabras clave y respuestas
    const knowledgeBase = [
        {
            keywords: ['precio', 'costo', 'cuanto vale', 'valor', 'cuánto cuesta'],
            response: "El precio de los paquetes varía según la promoción vigente. El Starter Pack comienza desde $2,500 MXN aprox. Si te interesa, puedo enviarte al catálogo."
        },
        {
            keywords: ['que son', 'qué son', 'ketones', 'cetonas', 'producto'],
            response: "Las cetonas exógenas R-BHB son una fuente de energía bio-idéntica. Te ayudan a entrar en cetosis en menos de 60 min sin dieta estricta."
        },
        {
            keywords: ['dieta', 'comer', 'keto', 'alimentacion', 'sigo comiendo'],
            response: "¡La mejor parte es esa! No necesitas una dieta keto estricta para sentir los beneficios, aunque reducir azúcares potencia los resultados."
        },
        {
            keywords: ['dosis', 'como tomar', 'tomar', 'preparacion', 'mezclar'],
            response: "Es muy simple: Disuelve 1 sobre en 500-700ml de agua fría, agita y tómalo en 20-30 minutos, preferiblemente por la mañana."
        },
        {
            keywords: ['envio', 'envío', 'donde llega', 'mexico', 'pais'],
            response: "Hacemos envíos a todo México, Estados Unidos y varios países de Europa. Tarda de 3 a 5 días hábiles."
        },
        {
            keywords: ['dra', 'nadia', 'quien es', 'experiencia'],
            response: "La Dra. Nadia Sanchez Cano es experta en salud hormonal y medicina regenerativa con más de 15 años de experiencia clínica."
        },
        {
            keywords: ['hormona', 'pms', 'sop', 'menopausia', 'mujer'],
            response: "Las cetonas son excelentes para la regulación hormonal. Ayudan con la energía, el SPM y la inflamación en condiciones como SOP o menopausia."
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
        let botResponse = "Lo siento, no tengo esa información específica. Pero escríbenos por WhatsApp para una atención personalizada.";

        // Logic to find match
        const found = knowledgeBase.find(item =>
            item.keywords.some(keyword => lowerInput.includes(keyword))
        );

        if (found) {
            botResponse = found.response;
        } else if (lowerInput.includes('hola') || lowerInput.includes('buenos')) {
            botResponse = "¡Hola! ¿Qué duda tienes sobre las cetonas?";
        } else if (lowerInput.includes('gracias')) {
            botResponse = "¡Un placer! Aquí sigo si necesitas algo más.";
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
            bottom: 80px;
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
                 bottom: 90px;
                 right: 5vw;
                 height: 60vh;
             }
         }
       `}</style>
        </div>
    );
};

export default Chatbot;
