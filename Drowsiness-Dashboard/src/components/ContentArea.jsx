import React from 'react';
import MetricsColumn from './MetricsColumn';
import CameraFeed from './CameraFeed';
import '../styles/components/ContentArea.css';

export default function ContentArea({ metrics }) {
  return (
    <div className="content-area">
      <MetricsColumn 
        position="left" 
        metrics={{
          alert: metrics.alertStatus,
          microSleep: metrics.microSleepTime
        }} 
      />
      
      <CameraFeed />
      
      <MetricsColumn 
        position="right" 
        metrics={{
          yawn: metrics.yawnDuration,
          blink: metrics.blinkCount
        }} 
      />
    </div>
  );
}