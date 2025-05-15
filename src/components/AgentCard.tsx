import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Agent } from '../data/agents';

interface AgentCardProps {
  agent: Agent;
  index: number;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { icon: Icon } = agent;

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
            backgroundColor: `${agent.color}20`,
            color: agent.color
          }}
        >
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white">{agent.title}</h3>
      </div>
      
      <p className="text-gray-300 mb-6 flex-grow">{agent.description}</p>
      
      <a 
        href={agent.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block"
      >
        <button 
          className="w-full btn-activate flex items-center justify-center"
          style={{
            backgroundColor: agent.color,
            boxShadow: `0 0 8px 0 ${agent.color}80`
          }}
        >
          Ativar no ChatGPT
        </button>
      </a>
    </motion.div>
  );
};

export default AgentCard;