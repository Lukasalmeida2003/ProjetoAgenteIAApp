import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AgentCard from '../components/AgentCard';
import { extraAgents } from '../data/extraAgents';

const ExtraAgents: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'agenteextra@agente.ia.com' && password === '2025') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Credenciais inválidas. Acesso negado.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-tech-black flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-xl border border-tech-purple/30 shadow-xl backdrop-blur-md w-full max-w-md"
        >
          <div className="flex flex-col items-center mb-8">
            <div className="p-3 rounded-full bg-tech-purple/20 text-tech-purple mb-4">
              <Lock className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-white">Área Restrita</h2>
            <p className="text-gray-400 text-sm mt-2">Acesse os agentes exclusivos</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-tech-purple focus:ring-1 focus:ring-tech-purple"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2" htmlFor="password">
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-tech-purple focus:ring-1 focus:ring-tech-purple"
                required
              />
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm text-center"
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-tech-purple to-tech-cyan text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-tech-purple/20"
            >
              Acessar Agentes Exclusivos
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-tech-black">
      <div className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center mb-12 text-tech-purple"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Agentes Exclusivos
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extraAgents.map((agent, index) => (
            <AgentCard key={agent.id} agent={agent} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraAgents;