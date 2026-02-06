
import React, { useState } from 'react';
import Chatbot from './Chatbot';

const FloatingControls = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="floating-controls">
      {isChatOpen && <Chatbot onClose={() => setIsChatOpen(false)} />}

      {/* Chatbot Bubble - Brand Gold */}
      <button
        className="float-btn chatbot-btn"
        aria-label="Chatbot"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        {isChatOpen ? (
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>×</span>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        )}
      </button>

      {/* WhatsApp Bubble - WhatsApp Green (Standard) */}
      <a href="https://wa.me/525512345678" target="_blank" rel="noopener noreferrer" className="float-btn whatsapp-btn" aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </a>

      <style jsx>{`
        .floating-controls {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          z-index: 1100;
          align-items: flex-end; /* Align to right */
        }

        .float-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-lg);
          cursor: pointer;
          transition: transform 0.3s ease;
          border: none;
        }

        .float-btn:hover {
          transform: scale(1.1);
        }

        .chatbot-btn {
          background-color: var(--secondary); /* Brand Gold */
          color: var(--dark);
        }

        .whatsapp-btn {
          background-color: #25D366; 
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default FloatingControls;
