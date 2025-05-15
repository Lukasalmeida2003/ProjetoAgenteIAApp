import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #9B5DE5 1px, transparent 1px), linear-gradient(to bottom, #9B5DE5 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute h-2 w-2 rounded-full bg-tech-cyan opacity-30"
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
              duration: 20 + Math.random() * 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Glowing orbs */}
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={`orb-${index}`}
          className="absolute rounded-full opacity-10"
          style={{
            background: index % 3 === 0 ? 'radial-gradient(circle, #00FFFF 0%, transparent 70%)' : 
                      index % 3 === 1 ? 'radial-gradient(circle, #9B5DE5 0%, transparent 70%)' :
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

      {/* Neural network lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FFFF" />
            <stop offset="100%" stopColor="#9B5DE5" />
          </linearGradient>
        </defs>
        {Array.from({ length: 20 }).map((_, i) => (
          <line 
            key={`line-${i}`}
            x1={Math.random() * 100 + "%"} 
            y1={Math.random() * 100 + "%"} 
            x2={Math.random() * 100 + "%"} 
            y2={Math.random() * 100 + "%"} 
            stroke="url(#grad1)" 
            strokeWidth="1" 
          />
        ))}
      </svg>
    </div>
  );
};

export default Background;