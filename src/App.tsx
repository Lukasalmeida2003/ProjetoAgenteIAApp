import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Background from './components/Background';
import AgentGrid from './components/AgentGrid';
import InfoSections from './components/InfoSection';
import Navigation from './components/Navigation';
import UpsellSection from './components/UpsellSection';
import Footer from './components/Footer';
import Login from './pages/Login';

const Dashboard = () => {
  useEffect(() => {
    document.title = "Agentes Inteligentes para ChatGPT – Pacote Essencial";
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
          <AgentGrid />
          <InfoSections />
          <UpsellSection />
        </motion.div>
      </main>
      <Navigation />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;