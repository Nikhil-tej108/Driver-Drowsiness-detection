import React from 'react';
import '../styles/components/MetricCard.css';

export default function MetricCard({ icon, label, value, isAlert }) {
  const cardClass = isAlert ? 'metric-card alert-card' : 'metric-card';

  return (
    <div className={cardClass}>
      <div className="metric-icon">
        {icon}
      </div>
      <div className="metric-content">
        <span className="metric-label">{label}</span>
        {value && <span className="metric-value">{value}</span>}
      </div>
    </div>
  );
}