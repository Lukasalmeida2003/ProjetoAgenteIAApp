import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-2 bg-tech-black/80 backdrop-blur-md shadow-lg' 
          : 'py-4 bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Sparkles className="w-7 h-7 text-tech-cyan mr-2" />
              <h1 className="text-2xl md:text-3xl font-bold">
                <span className="text-white">Agentes Inteligentes para</span>
                <span className="text-tech-cyan ml-2">ChatGPT</span>
                <span className="text-tech-gold ml-1">–</span>
                <span className="text-tech-purple ml-1">Pacote Essencial</span>
              </h1>
            </div>
            <p className="text-gray-300 text-sm md:text-base">
              15 especialistas prontos para ativar com 1 clique.
            </p>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;