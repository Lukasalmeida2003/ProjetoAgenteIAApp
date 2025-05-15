import React from 'react';
import { motion } from 'framer-motion';
import AgentCard from './AgentCard';
import { agents } from '../data/agents';

const AgentGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-center mb-12 text-tech-cyan"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Especialistas ao seu alcance
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent, index) => (
          <AgentCard key={agent.id} agent={agent} index={index} />
        ))}
      </div>
    </div>
  );
};

export default AgentGrid;