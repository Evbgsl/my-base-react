import './VolumeController.css';
import React, { useState } from 'react';

export const VolumeController = () => {
  const [level, setLevel] = useState(5);
  const [colorEffect, setColorEffect] = useState(null);

  const triggerColorEffect = (color) => {
    setColorEffect(color);
    setTimeout(() => {
      setColorEffect(null);
    }, 150);
  };

  const handleVolumeDown = () => {
    if (level <= 1) {
      triggerColorEffect('yellow');
    } else {
      setLevel(level - 1);
    }
  };

  const handleVolumeUp = () => {
    if (level >= 10) {
      triggerColorEffect('red');
    } else {
      setLevel(level + 1);
    }
  };

  return (
    <div className="volume-controller">
      <h3>Super heavy duty volume controller</h3>
      <div className="volume-bar">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className={`volume-bar-square ${colorEffect ? colorEffect : i < level ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="volume-buttons-container">
        <button className="volume-button" onClick={handleVolumeDown}>
          -
        </button>
        <button className="volume-button" onClick={handleVolumeUp}>
          +
        </button>
      </div>
    </div>
  );
};