import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, Star, RefreshCw, HelpCircle } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: 'how-to-use', label: 'Como Usar', icon: <Info className="w-4 h-4" /> },
  { id: 'recommendations', label: 'Recomendações', icon: <Star className="w-4 h-4" /> },
  { id: 'updates', label: 'Atualizações', icon: <RefreshCw className="w-4 h-4" /> },
  { id: 'faq', label: 'FAQ', icon: <HelpCircle className="w-4 h-4" /> },
];

const Navigation: React.FC = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleClick = (id: string) => {
    setActiveItem(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div 
      className="fixed top-1/2 right-4 transform -translate-y-1/2 z-40 hidden lg:block"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <div className="bg-black/30 backdrop-blur-md p-2 rounded-full flex flex-col items-center space-y-4 border border-gray-800">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`p-2 rounded-full transition-all duration-300 ${
              activeItem === item.id
                ? 'bg-tech-cyan text-black'
                : 'text-gray-400 hover:text-white'
            }`}
            aria-label={item.label}
            title={item.label}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default Navigation;