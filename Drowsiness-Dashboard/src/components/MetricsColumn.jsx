import React from 'react';
import MetricCard from './MetricCard';
import { AlertTriangle, Brain, Clock, Eye } from 'lucide-react';
import '../styles/components/MetricesColumn.css';

export default function MetricsColumn({ position, metrics }) {
  if (position === 'left') {
    return (
      <div className={`metrics-column ${position}`}>
        <MetricCard 
          icon={<AlertTriangle size={32} />}
          label="ALERT"
          value={null}
          isAlert={true}
        />
        <MetricCard 
          icon={<Brain size={28} />}
          label="MICROSLEEP TIME"
          value={metrics.microSleep}
          isAlert={false}
        />
      </div>
    );
  }

  return (
    <div className={`metrics-column ${position}`}>
      <MetricCard 
        icon={<Clock size={28} />}
        label="YAWN DURATION"
        value={metrics.yawn}
        isAlert={false}
      />
      <MetricCard 
        icon={<Eye size={28} />}
        label="BLINK COUNT"
        value={metrics.blink}
        isAlert={false}
      />
    </div>
  );
}