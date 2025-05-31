import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Users } from 'lucide-react';

interface UpsellCardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  icon: React.ReactNode;
  link: string;
}

const UpsellCard: React.FC<UpsellCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  buttonText, 
  icon,
  link 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute inset-0">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tech-black via-tech-black/90 to-transparent" />
      </div>

      <div className="relative p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-lg bg-tech-cyan/10 text-tech-cyan mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>

        <p className="text-gray-300 mb-6 flex-grow">{description}</p>

        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full"
        >
          <button 
            className="w-full bg-tech-cyan text-black font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:glow-cyan hover:scale-105"
          >
            {buttonText}
          </button>
        </a>
      </div>
    </motion.div>
  );
};

const UpsellSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-center mb-12 text-tech-purple"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Mais Conteúdos
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UpsellCard
          title="PACK PRO DE PROMPTS SECRETOS"
          description="Desbloqueie 30 comandos prontos usados por profissionais para extrair o máximo da IA. Aumente sua performance em vendas, estudos, produtividade e criatividade com prompts testados e aprovados."
          imageUrl="https://i.imgur.com/ntajpxm.jpeg"
          buttonText="Quero esse pack"
          icon={<Sparkles className="w-6 h-6" />}
          link="https://go.disruptybr.shop/vvj6clanh0"
        />
        <UpsellCard
          title="PACK EXTRA COM 10 AGENTES AVANÇADOS"
          description="Expanda sua central de agentes com 10 novas funções premium: produtividade extrema, storytelling, funis de vendas, automação criativa e mais. Potencial máximo em poucos cliques."
          imageUrl="https://i.imgur.com/H6rPgvC.png"
          buttonText="Adicionar ao meu acesso"
          icon={<Users className="w-6 h-6" />}
          link="https://frabjous-biscotti-65d9b3.netlify.app"
        />
      </div>
    </div>
  );
};

export default UpsellSection;