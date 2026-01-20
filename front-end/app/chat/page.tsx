'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  data?: AIResponse;
}

interface AIResponse {
  link: string;
  Explain: string;
  use: string[];
  How: string[];
}

export default function Voice2GovChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isDark, setIsDark] = useState(true);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: input
        })
      });

      const data: AIResponse = await response.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: data.Explain,
        data: data
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: 'Sorry, I could not process your request.',
        data: {
          link: '',
          Explain: 'There was an error processing your request. Please try again.',
          use: [],
          How: []
        }
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-5xl mx-auto h-screen flex flex-col">
        
        {/* Header */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`flex items-center justify-between p-4 border-b ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
        >
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark ? 'bg-blue-600' : 'bg-blue-500'}`}
            >
              <span className="text-xl">🎤</span>
            </motion.div>
            <div>
              <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Voice2Gov
              </h1>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Your Government Schemes Assistant
              </p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDark(!isDark)}
            className={`px-4 py-2 rounded-lg ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
          >
            {isDark ? '☀️' : '🌙'}
          </motion.button>
        </motion.div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-full"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-6xl mb-4"
                >
                  🎤
                </motion.div>
                <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Welcome to Voice2Gov
                </h2>
                <p className={`text-center max-w-md ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Ask me about any government scheme in your local language. I'm here to help!
                </p>
              </motion.div>
            )}

            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-2xl ${message.type === 'user' ? 'w-auto' : 'w-full'}`}>
                  {message.type === 'user' ? (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`px-4 py-3 rounded-2xl ${
                        isDark 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-blue-500 text-white'
                      }`}
                    >
                      <p className="leading-relaxed">{message.content}</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className={`p-4 rounded-2xl ${
                        isDark 
                          ? 'bg-gray-800 border border-gray-700' 
                          : 'bg-white border border-gray-200'
                      }`}
                    >
                      <p className={`mb-3 leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                        {message.content}
                      </p>

                      {message.data && (
                        <div className="space-y-3 mt-4">
                          {message.data.link && (
                            <motion.a
                              href={message.data.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.02 }}
                              className={`block px-4 py-2 rounded-lg text-center font-medium ${
                                isDark 
                                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                  : 'bg-blue-500 text-white hover:bg-blue-600'
                              }`}
                            >
                              🔗 View Scheme Details
                            </motion.a>
                          )}

                          {message.data.use && message.data.use.length > 0 && (
                            <div>
                              <h4 className={`font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                ✅ Who Can Use:
                              </h4>
                              <ul className="space-y-1">
                                {message.data.use.map((item, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                                  >
                                    • {item}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {message.data.How && message.data.How.length > 0 && (
                            <div>
                              <h4 className={`font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                📝 How to Apply:
                              </h4>
                              <ul className="space-y-1">
                                {message.data.How.map((step, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                                  >
                                    {idx + 1}. {step}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}

            {loading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className={`px-4 py-3 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                  <div className="flex gap-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      className={`w-2 h-2 rounded-full ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`}
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      className={`w-2 h-2 rounded-full ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`}
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      className={`w-2 h-2 rounded-full ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`p-4 border-t ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
        >
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about government schemes..."
              className={`flex-1 px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all ${
                isDark
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500'
                  : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-400'
              }`}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                loading || !input.trim()
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : isDark
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Send
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}