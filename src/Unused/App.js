import './App.css';
import React, { useState } from 'react';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import { VolumeController } from './VolumeController';
import { RadioPlayer } from './RadioPlayer';

export const App = (props) => {
  const [volume, setVolume] = useState(0.5);
  const [activePlayerId, setActivePlayerId] = useState(null);
  const stations = [
    { id: 1, name: 'LikeFM', url: 'https://pub0301.101.ru:8443/stream/air/mp3/256/219' },
    { id: 2, name: 'Виктор Цой', url: 'https://pub0302.101.ru:8443/stream/pro/aac/64/103' },
    { id: 3, name: 'Relax', url: 'https://pub0301.101.ru:8443/stream/air/mp3/256/200' },
  ];

  const handlePlayerPlay = (playerId) => {
    setActivePlayerId(playerId);
  };

  return (
    <div className="app">
      <h2>{props.name}</h2>

      {stations.map((station) => (
        <RadioPlayer
          key={station.id}
          volume={volume}
          stationName={station.name}
          streamUrl={station.url}
          isActive={activePlayerId === station.id}
          onPlay={() => handlePlayerPlay(station.id)}
        />
      ))}

      <VolumeController onVolumeChange={setVolume} />

      <YMaps>
        <div className="map-container">
          <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} width="100%" height="100%" />
        </div>
      </YMaps>
    </div>
  );
};
