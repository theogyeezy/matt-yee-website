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

const Core = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, #00d4ff 0%, #0099cc 50%, #006699 100%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 60px #00d4ff, inset 0 0 20px #00d4ff;
  animation: glow 1.5s ease-in-out infinite alternate;
  
  @keyframes glow {
    from {
      box-shadow: 0 0 60px #00d4ff, inset 0 0 20px #00d4ff;
    }
    to {
      box-shadow: 0 0 80px #00d4ff, inset 0 0 30px #00d4ff;
    }
  }
`;

const Ring = styled.div`
  position: absolute;
  border: 2px solid ${props => props.color || '#00d4ff'};
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.8;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  animation: ${props => props.reverse ? 'rotateReverse' : 'rotate'} ${props => props.duration || 3}s linear infinite;
  
  @keyframes rotate {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }
  
  @keyframes rotateReverse {
    from { transform: translate(-50%, -50%) rotate(360deg); }
    to { transform: translate(-50%, -50%) rotate(0deg); }
  }
`;

const HudCircle = styled.div`
  position: absolute;
  border: 1px solid #00d4ff;
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  opacity: 0;
  animation: hudAppear 0.5s ease-out ${props => props.delay || 0.5}s forwards;
  
  @keyframes hudAppear {
    to {
      opacity: 0.3;
      transform: scale(1.1);
    }
  }
`;

const ScanLine = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00d4ff, transparent);
  animation: scan 2s linear infinite;
  
  @keyframes scan {
    0% { top: -2px; }
    100% { top: 100%; }
  }
`;

const SystemText = styled.h1`
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
  animation: flicker 2s infinite;
  
  @keyframes flicker {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }
`;

const StatusText = styled.p`
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

const LoadingProgress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #00d4ff, #0099cc);
  width: 0%;
  animation: load 3s ease-out forwards;
  
  @keyframes load {
    0% { width: 0%; }
    100% { width: 100%; }
  }
`;

const DataStream = styled.div`
  position: absolute;
  top: 0;
  width: 100px;
  height: 100%;
  background: linear-gradient(180deg, transparent, rgba(0, 212, 255, 0.1), transparent);
  opacity: 0.5;
  
  &.left {
    left: 0;
    animation: streamDown 3s linear infinite;
  }
  
  &.right {
    right: 0;
    animation: streamUp 3s linear infinite;
  }
  
  @keyframes streamDown {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  
  @keyframes streamUp {
    0% { transform: translateY(100%); }
    100% { transform: translateY(-100%); }
  }
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
              <Core />
              <Ring size={100} duration={3} />
              <Ring size={140} color="#0099cc" reverse duration={4} />
              <Ring size={180} color="#006699" duration={5} />
            </ArcReactor>

            <HudCircle
              size={300}
              top="10%"
              left="10%"
              delay="0.5s"
            />
            <HudCircle
              size={250}
              bottom="15%"
              right="15%"
              delay="0.7s"
            />
            <HudCircle
              size={200}
              top="20%"
              right="10%"
              delay="0.9s"
            />

            <ScanLine />

            <SystemText>
              {statusText}
            </SystemText>

            <StatusText>{subText}</StatusText>

            <LoadingBar>
              <LoadingProgress />
            </LoadingBar>

            <DataStream className="left" />
            <DataStream className="right" />
          </JarvisUI>
        </LoaderContainer>
      )}
    </AnimatePresence>
  );
};

export default JarvisLoader;