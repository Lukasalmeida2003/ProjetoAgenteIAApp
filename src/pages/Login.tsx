import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'especialistaia@agente.ia.com' && password === '2025') {
      navigate('/app');
    } else {
      setError('Usuário ou senha inválidos. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-tech-black flex items-center justify-center relative overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #00FFFF 1px, transparent 1px), linear-gradient(to bottom, #9B5DE5 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating tech elements */}
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

        {/* Glowing orbs */}
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.div
            key={`orb-${index}`}
            className="absolute rounded-full opacity-10"
            style={{
              background: index === 0 ? 'radial-gradient(circle, #00FFFF 0%, transparent 70%)' : 
                        index === 1 ? 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)' :
                        'radial-gradient(circle, #FFD369 0%, transparent 70%)',
              width: `${200 + Math.random() * 300}px`,
              height: `${200 + Math.random() * 300}px`,
            }}
            initial={{ 
              x: `${Math.random() * 100 - 25}vw`, 
              y: `${Math.random() * 100 - 25}vh` 
            }}
            animate={{ 
              x: [
                `${Math.random() * 100 - 25}vw`,
                `${Math.random() * 100 - 25}vw`,
                `${Math.random() * 100 - 25}vw`
              ],
              y: [
                `${Math.random() * 100 - 25}vh`,
                `${Math.random() * 100 - 25}vh`,
                `${Math.random() * 100 - 25}vh`
              ]
            }}
            transition={{
              duration: 30 + Math.random() * 50,
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
        className="bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-xl border border-tech-cyan/30 shadow-xl backdrop-blur-md relative z-10 w-full max-w-md mx-4"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <Brain className="w-12 h-12 text-tech-purple animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold text-center text-white mt-4">
            Central de Agentes IA
          </h2>
          <p className="text-gray-400 text-sm mt-2">Acesse seu painel de controle</p>
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
              className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors"
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
              className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors"
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
            className="w-full bg-gradient-to-r from-tech-cyan to-tech-purple text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:glow-cyan hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">Acessar Painel</span>
            <div className="absolute inset-0 bg-gradient-to-r from-tech-purple to-tech-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;