import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, Star, RefreshCw, HelpCircle, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  action?: () => void;
}

const Navigation: React.FC = () => {
  const [activeItem, setActiveItem] = useState('');
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    { id: 'how-to-use', label: 'Como Usar', icon: <Info className="w-4 h-4" /> },
    { id: 'recommendations', label: 'Recomendações', icon: <Star className="w-4 h-4" /> },
    { id: 'updates', label: 'Atualizações', icon: <RefreshCw className="w-4 h-4" /> },
    { id: 'faq', label: 'FAQ', icon: <HelpCircle className="w-4 h-4" /> },
    { 
      id: 'extra', 
      label: 'Agentes Extra', 
      icon: <Lock className="w-4 h-4" />,
      action: () => navigate('/extra')
    },
  ];

  const handleClick = (item: NavItem) => {
    setActiveItem(item.id);
    if (item.action) {
      item.action();
    } else {
      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
    }
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
            onClick={() => handleClick(item)}
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