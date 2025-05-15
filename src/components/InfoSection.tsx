import React from 'react';
import { motion } from 'framer-motion';
import { Info, Star, RefreshCw, HelpCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface InfoSectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({ id, title, icon, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      id={id}
      ref={ref}
      className="mb-16 bg-gradient-to-br from-gray-900 to-black p-6 md:p-8 rounded-xl border border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-tech-black rounded-lg mr-3 text-tech-cyan">
          {icon}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-tech-cyan">{title}</h2>
      </div>
      <div className="text-gray-300">
        {children}
      </div>
    </motion.div>
  );
};

const InfoSections: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <InfoSection id="how-to-use" title="Como usar os agentes?" icon={<Info className="w-6 h-6" />}>
        <ol className="list-decimal pl-5 space-y-3">
          <li>Clique no botão "Ativar no ChatGPT" do agente desejado.</li>
          <li>O ChatGPT abrirá automaticamente com o agente já carregado.</li>
          <li>Comece a conversar com o agente especializado conforme sua necessidade.</li>
          <li>Para trocar de agente a qualquer momento, retorne a esta página e selecione outro especialista.</li>
        </ol>
      </InfoSection>
      
      <InfoSection id="recommendations" title="Recomendações de uso" icon={<Star className="w-6 h-6" />}>
        <ul className="list-disc pl-5 space-y-3">
          <li>Para melhores resultados, seja específico em suas solicitações ao agente.</li>
          <li>Os agentes funcionam melhor quando você fornece contexto detalhado sobre sua situação.</li>
          <li>Experimente combinar diferentes agentes para tarefas complexas (ex: comece com o Agente de Estratégia e depois consulte o Agente de Implementação).</li>
          <li>Salve suas conversas importantes para referência futura.</li>
        </ul>
      </InfoSection>
      
      <InfoSection id="updates" title="Atualizações futuras (em breve)" icon={<RefreshCw className="w-6 h-6" />}>
        <ul className="list-disc pl-5 space-y-3">
          <li>Novos agentes especializados serão adicionados regularmente.</li>
          <li>Melhorias contínuas nos agentes existentes com base no feedback dos usuários.</li>
          <li>Funcionalidade para criar seus próprios agentes personalizados.</li>
          <li>Dashboard para acompanhar suas interações com diferentes agentes.</li>
        </ul>
      </InfoSection>
      
      <InfoSection id="faq" title="Perguntas Frequentes" icon={<HelpCircle className="w-6 h-6" />}>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-tech-gold mb-1">Os agentes expiram?</h3>
            <p>Não, você tem acesso vitalício a todos os 15 agentes deste pacote.</p>
          </div>
          <div>
            <h3 className="font-semibold text-tech-gold mb-1">Preciso de assinatura do ChatGPT Plus?</h3>
            <p>Não é obrigatório, mas recomendamos para melhor desempenho com GPT-4.</p>
          </div>
          <div>
            <h3 className="font-semibold text-tech-gold mb-1">Posso compartilhar os agentes?</h3>
            <p>Os agentes são para uso pessoal. Compartilhar não é permitido conforme os termos de uso.</p>
          </div>
          <div>
            <h3 className="font-semibold text-tech-gold mb-1">Como recebo suporte?</h3>
            <p>Entre em contato através do email de suporte fornecido no seu recibo de compra.</p>
          </div>
        </div>
      </InfoSection>
    </div>
  );
};

export default InfoSections;