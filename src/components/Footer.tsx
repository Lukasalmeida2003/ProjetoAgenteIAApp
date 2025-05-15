import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="py-10 mt-10 border-t border-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Agentes Inteligentes para ChatGPT – Todos os direitos reservados
          </p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-tech-cyan transition-colors mx-2 text-sm">Termos de Uso</a>
            <a href="#" className="text-gray-400 hover:text-tech-cyan transition-colors mx-2 text-sm">Política de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-tech-cyan transition-colors mx-2 text-sm">Suporte</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;