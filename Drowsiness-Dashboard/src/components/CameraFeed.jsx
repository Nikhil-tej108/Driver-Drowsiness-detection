import React from 'react';
import { Eye } from 'lucide-react';
import '../styles/components/CameraFeed.css';

export default function CameraFeed() {
  return (
    <div className="camera-feed-wrapper">
      <div className="camera-feed">
        <div className="camera-placeholder">
          <Eye className="camera-icon" size={48} />
        </div>
      </div>
      <div className="camera-glow"></div>
    </div>
  );
}