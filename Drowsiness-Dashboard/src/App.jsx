import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import ContentArea from './components/ContentArea';
import BottomBar from './components/BottomBar';
import './styles/global.css';
import './styles/App.css';

export default function App() {
  const [metrics, setMetrics] = useState({
    alertStatus: 'ALERT',
    microSleepTime: '0:07s',
    yawnDuration: '1.2s',
    blinkCount: 35,
    sessionTime: '12:45'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        blinkCount: Math.min(prev.blinkCount + 1, 100)
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="detector-container">
      <div className="background-gradient"></div>
      <div className="detector-panel">
        <TopBar />
        <ContentArea metrics={metrics} />
        <BottomBar metrics={metrics} />
      </div>
    </div>
  );
}