import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Brain, Instagram, DollarSign, MessageSquare, Presentation, 
         Brain as BrainIcon, Apple, Palette, Smile, Target, BookOpen } from 'lucide-react';
import ModuleCard from '../components/ModuleCard';

interface Module {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
}

const modules: Module[] = [
  {
    id: "reels",
    title: "Agente Instagram Reels",
    description: "Criação de conteúdo cativante para Reels com alta retenção e potencial de viralização.",
    icon: Instagram,
    color: "#00FFFF"
  },
  {
    id: "affiliate",
    title: "Agente Afiliado",
    description: "Estratégias modernas de venda como afiliado com foco em copy, funis e tráfego de baixo custo.",
    icon: DollarSign,
    color: "#9B5DE5"
  },
  {
    id: "storytelling",
    title: "Agente Storytelling",
    description: "Geração de narrativas emocionantes para conteúdo digital, vídeos e anúncios com conexão imediata.",
    icon: MessageSquare,
    color: "#FFD369"
  },
  {
    id: "pitch",
    title: "Agente Pitch Profissional",
    description: "Criação de bios, apresentações e introduções impactantes com autoridade e clareza.",
    icon: Presentation,
    color: "#00FFFF"
  },
  {
    id: "influence",
    title: "Agente Influência & Persuasão",
    description: "Gatilhos mentais, técnicas de persuasão e PNL para usar em textos e comunicação estratégica.",
    icon: BrainIcon,
    color: "#9B5DE5"
  },
  {
    id: "nutrition",
    title: "Agente Nutrição Inteligente",
    description: "Sugestão de cardápios personalizados para foco, energia ou estética com base em IA.",
    icon: Apple,
    color: "#FFD369"
  },
  {
    id: "design",
    title: "Agente Design no Canva",
    description: "Ideias de layout, identidade visual, cores e composição para projetos no Canva.",
    icon: Palette,
    color: "#00FFFF"
  },
  {
    id: "memes",
    title: "Agente Memes Virais",
    description: "Criação de memes com formatos populares, linguagem do momento e temas do seu nicho.",
    icon: Smile,
    color: "#9B5DE5"
  },
  {
    id: "mindset",
    title: "Agente Mentalidade Milionária",
    description: "Frases, reflexões e hábitos para ativar o mindset de sucesso e alta performance.",
    icon: Target,
    color: "#FFD369"
  },
  {
    id: "courses",
    title: "Agente Planejamento de Cursos",
    description: "Estrutura de cursos online com organização de módulos, aulas e objetivos didáticos.",
    icon: BookOpen,
    color: "#00FFFF"
  }
];

const ExclusiveModules: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'agenteextra@agente.ia.com' && password === '2025') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-tech-black flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, #00FFFF 1px, transparent 1px), linear-gradient(to bottom, #9B5DE5 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-xl border border-tech-cyan/30 shadow-xl backdrop-blur-md relative z-10 w-full max-w-md mx-4"
        >
          <div className="flex flex-col items-center mb-8">
            <Brain className="w-12 h-12 text-tech-purple animate-pulse" />
            <h2 className="text-2xl font-bold text-center text-white mt-4">
              Módulos Exclusivos
            </h2>
            <p className="text-gray-400 text-sm mt-2">Acesso exclusivo para desbloqueadores do pacote Pro</p>
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
              <span className="relative z-10">Acessar Módulos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-tech-purple to-tech-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          className="text-2xl md:text-3xl font-bold text-center mb-12 text-tech-cyan"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Módulos Exclusivos Pro
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <ModuleCard key={module.id} module={module} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveModules;