'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Voice2GovHome() {
  const [isDark, setIsDark] = useState(true);

  const features = [
    {
      icon: '🎤',
      title: 'Voice-Powered',
      description: 'Interact naturally using your voice in your local language'
    },
    {
      icon: '🤖',
      title: 'AI Assistant',
      description: 'Powered by Google AI for accurate and helpful responses'
    },
    {
      icon: '🌍',
      title: 'Local Language',
      description: 'Understand schemes in simple, easy-to-understand language'
    },
    {
      icon: '📋',
      title: 'Scheme Details',
      description: 'Get comprehensive information about eligibility and benefits'
    },
    {
      icon: '🔗',
      title: 'Direct Links',
      description: 'Access official government scheme portals directly'
    },
    {
      icon: '✅',
      title: 'Step-by-Step',
      description: 'Clear instructions on how to apply for schemes'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Ask Your Question',
      description: 'Type or speak about the government scheme you want to know about'
    },
    {
      step: '2',
      title: 'AI Processes',
      description: 'Our AI understands your query and finds relevant schemes'
    },
    {
      step: '3',
      title: 'Get Information',
      description: 'Receive detailed explanation, eligibility, and application steps'
    },
    {
      step: '4',
      title: 'Take Action',
      description: 'Access direct links to apply for the schemes that match your needs'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed w-full top-0 z-50 border-b backdrop-blur-lg ${isDark ? 'bg-gray-900/90 border-gray-800' : 'bg-white/90 border-gray-200'}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <span className="text-3xl">🎤</span>
            <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Voice2Gov
            </span>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDark(!isDark)}
            className={`px-4 py-2 rounded-lg ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}`}
          >
            {isDark ? '☀️' : '🌙'}
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="mb-8"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-9xl mb-6"
            >
              🎤
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-5xl md:text-7xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Discover Government Schemes
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              In Your Language
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            AI-powered assistant that helps you understand and access relevant government schemes in simple, local language
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link href="/chat">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-xl text-lg font-bold ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                }`}
              >
                Start Chatting Now →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Powerful Features
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Everything you need to access government schemes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 rounded-2xl ${
                  isDark 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="text-5xl mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={`py-20 px-6 ${isDark ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              How It Works
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Get started in 4 simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 ${
                    isDark 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  }`}
                >
                  {item.step}
                </motion.div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  {item.description}
                </p>
                {index < howItWorks.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="hidden lg:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`max-w-4xl mx-auto text-center p-12 rounded-3xl ${
            isDark 
              ? 'bg-gradient-to-r from-blue-900 to-purple-900 border border-blue-700' 
              : 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300'
          }`}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl mb-6"
          >
            🚀
          </motion.div>
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Ready to Get Started?
          </h2>
          <p className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Start discovering government schemes that you're eligible for
          </p>
          <Link href="/chat">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-xl text-lg font-bold ${
                isDark 
                  ? 'bg-white text-blue-900' 
                  : 'bg-gray-900 text-white'
              }`}
            >
              Launch Voice2Gov →
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            © 2024 Voice2Gov. Empowering citizens with information.
          </p>
        </div>
      </footer>
    </div>
  );
}