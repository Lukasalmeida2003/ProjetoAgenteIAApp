import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Background from '../components/Background';
import Header from '../components/Header';
import PremiumAgentGrid from '../components/PremiumAgentGrid';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Premium: React.FC = () => {
  useEffect(() => {
    document.title = "Agentes Premium – Pacote Pro";
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-tech-black text-white font-inter">
      <Background />
      <Header />
      <main className="relative z-10 pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <PremiumAgentGrid />
        </motion.div>
      </main>
      <Navigation />
      <Footer />
    </div>
  );
};

export default Premium;