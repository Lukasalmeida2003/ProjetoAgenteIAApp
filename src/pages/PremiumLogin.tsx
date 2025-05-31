import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Brain } from 'lucide-react';

const PremiumLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'agenteextra@agente.ia.com' && password === '2025') {
      navigate('/premium');
    } else {
      setError('Usuário ou senha inválidos. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-tech-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #00FFFF 1px, transparent 1px), linear-gradient(to bottom, #9B5DE5 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute h-2 w-2 rounded-full bg-tech-cyan opacity-20"
            initial={{ 
              x: `${Math.random() * 100}vw`, 
              y: `${Math.random() * 100}vh` 
            }}
            animate={{ 
              x: [
                `${Math.random() * 100}vw`,
                `${Math.random() * 100}vw`,
                `${Math.random() * 100}vw`
              ],
              y: [
                `${Math.random() * 100}vh`,
                `${Math.random() * 100}vh`,
                `${Math.random() * 100}vh`
              ]
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-xl border border-tech-purple/30 shadow-xl backdrop-blur-md relative z-10 w-full max-w-md mx-4"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <Brain className="w-12 h-12 text-tech-purple animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold text-center text-white mt-4">
            Agentes Premium
          </h2>
          <p className="text-gray-400 text-sm mt-2 text-center">
            Acesso exclusivo aos desbloqueadores do pacote Pro. Faça login para visualizar os agentes premium.
          </p>
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
              className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-tech-purple focus:ring-1 focus:ring-tech-purple transition-colors"
              placeholder="Seu e-mail"
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
              className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-tech-purple focus:ring-1 focus:ring-tech-purple transition-colors"
              placeholder="Sua senha"
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
            className="w-full bg-gradient-to-r from-tech-purple to-tech-cyan text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:glow-purple hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">Acessar Agentes Premium</span>
            <div className="absolute inset-0 bg-gradient-to-r from-tech-cyan to-tech-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default PremiumLogin;