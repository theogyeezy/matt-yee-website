import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const LoaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle at center, #001a33 0%, #000511 100%);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const JarvisUI = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArcReactor = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

const Core = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, #00d4ff 0%, #0099cc 50%, #006699 100%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 60px #00d4ff, inset 0 0 20px #00d4ff;
`;

const Ring = styled(motion.div)`
  position: absolute;
  border: 2px solid ${props => props.color || '#00d4ff'};
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.8;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const HudCircle = styled(motion.div)`
  position: absolute;
  border: 1px solid #00d4ff;
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
`;

const ScanLine = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00d4ff, transparent);
`;

const SystemText = styled(motion.h1)`
  position: absolute;
  bottom: 25%;
  font-family: 'Orbitron', monospace;
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 3px;
  color: #00d4ff;
  text-shadow: 0 0 20px #00d4ff;
  text-align: center;
  width: 100%;
`;

const StatusText = styled(motion.p)`
  position: absolute;
  bottom: 20%;
  font-family: 'Orbitron', monospace;
  font-size: 0.9rem;
  letter-spacing: 2px;
  color: #0099cc;
  text-align: center;
  width: 100%;
`;

const LoadingBar = styled.div`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 4px;
  background: rgba(0, 212, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
`;

const LoadingProgress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #00d4ff, #0099cc);
`;

const DataStream = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100px;
  height: 100%;
  background: linear-gradient(180deg, transparent, rgba(0, 212, 255, 0.1), transparent);
  opacity: 0.5;
`;

const JarvisLoader = ({ isComplete }) => {
  const [statusText, setStatusText] = useState('SYSTEM INITIALIZING');
  const [subText, setSubText] = useState('ACCESSING MATT YEE SYSTEMS...');

  useEffect(() => {
    const timer1 = setTimeout(() => setStatusText('LOADING MODULES'), 1000);
    const timer2 = setTimeout(() => setSubText('ENGINEER MODE: ACTIVE'), 1500);
    const timer3 = setTimeout(() => setStatusText('SYSTEM READY'), 2500);
    const timer4 = setTimeout(() => setSubText('WELCOME TO MATT YEE'), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <LoaderContainer
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <JarvisUI>
            <ArcReactor>
              <Core
                animate={{
                  boxShadow: [
                    '0 0 60px #00d4ff, inset 0 0 20px #00d4ff',
                    '0 0 80px #00d4ff, inset 0 0 30px #00d4ff',
                    '0 0 60px #00d4ff, inset 0 0 20px #00d4ff',
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <Ring
                size={100}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <Ring
                size={140}
                color="#0099cc"
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
              <Ring
                size={180}
                color="#006699"
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              />
            </ArcReactor>

            <HudCircle
              size={300}
              top="10%"
              left="10%"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.3, scale: 1.1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <HudCircle
              size={250}
              bottom="15%"
              right="15%"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.3, scale: 1.1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />
            <HudCircle
              size={200}
              top="20%"
              right="10%"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.3, scale: 1.1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            />

            <ScanLine
              animate={{ top: ['-2px', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />

            <SystemText
              animate={{ opacity: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {statusText}
            </SystemText>

            <StatusText>{subText}</StatusText>

            <LoadingBar>
              <LoadingProgress
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 3, ease: 'easeOut' }}
              />
            </LoadingBar>

            <DataStream
              style={{ left: 0 }}
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <DataStream
              style={{ right: 0 }}
              animate={{ y: ['100%', '-100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </JarvisUI>
        </LoaderContainer>
      )}
    </AnimatePresence>
  );
};

export default JarvisLoader;