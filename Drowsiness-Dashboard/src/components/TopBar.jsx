import React from 'react';
import { Brain } from 'lucide-react';
import '../styles/components/TopBar.css';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="title-section">
        <Brain className="title-icon" size={24} />
        <h1 className="title">DROWSINESS DETECTOR</h1>
      </div>
    </div>
  );
}