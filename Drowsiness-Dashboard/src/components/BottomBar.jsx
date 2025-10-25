import React from 'react';
import { Brain } from 'lucide-react';
import '../styles/components/BottomBar.css';

export default function BottomBar({ metrics }) {
  return (
    <div className="bottom-bar">
      <div className="status-indicator">
        <span className="status-dot"></span>
        <span className="status-text">System Active</span>
      </div>
      <div className="session-time">Session: {metrics.sessionTime}</div>
      <div className="ai-model">
        <Brain size={16} />
        <span>AI Model v2.1</span>
      </div>
    </div>
  );
}