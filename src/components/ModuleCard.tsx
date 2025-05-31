import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Module {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
}

interface ModuleCardProps {
  module: Module;
  index: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { icon: Icon } = module;

  return (
    <motion.div
      ref={ref}
      className="agent-card h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 } 
      }}
    >
      <div className="flex items-center mb-4">
        <div 
          className="p-3 rounded-full mr-3"
          style={{ 
            backgroundColor: `${module.color}20`,
            color: module.color
          }}
        >
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white">{module.title}</h3>
      </div>
      
      <p className="text-gray-300 mb-6 flex-grow">{module.description}</p>
      
      <button 
        className="w-full btn-activate mt-auto flex items-center justify-center"
        style={{
          backgroundColor: module.color,
          boxShadow: `0 0 8px 0 ${module.color}80`
        }}
      >
        Ativar no ChatGPT
      </button>
    </motion.div>
  );
};

export default ModuleCard;