import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Musializer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(50);
  const [audioData, setAudioData] = useState<Uint8Array>(new Uint8Array(0));
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('./media/sounds/check1.mp3');
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      const source = audioContextRef.current.createMediaElementSource(audioRef.current);
      analyserRef.current = audioContextRef.current.createAnalyser();
      source.connect(analyserRef.current);
      analyserRef.current.connect(audioContextRef.current.destination);
      analyserRef.current.fftSize = 256;
      const bufferLength = analyserRef.current.frequencyBinCount;
      setAudioData(new Uint8Array(bufferLength));
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    const updateAudioData = () => {
      if (analyserRef.current) {
        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(dataArray);
        setAudioData(dataArray);
      }
      requestAnimationFrame(updateAudioData);
    };
    updateAudioData();
  }, []);

  function handlePlayClick() {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current?.play();
      console.log('playing');
    } else {
      audioRef.current?.pause();
      console.log('paused');
    }
  }

  return (
    <div className="bodyCenter">
      <h1>Musializer</h1>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <button
          className="playButton"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          onMouseDown={handlePlayClick}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '85px' }}>
            {isPlaying ? 'play_arrow' : 'pause'}
          </span>
        </button>

        <div className="volumeSliderDiv">
          <Slider value={volume} set={setVolume} />
        </div>

        <div className="visualizer">
          {audioData.map((value, index) => (
            <motion.div
              key={index}
              className="bar"
              initial={{ height: 0 }}
              animate={{ height: value }}
              transition={{ duration: 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface SliderProps {
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
}

export function Slider({ value, set, min = 0, max = 100 }: SliderProps) {
  return (
    <div className="volumeSliderDiv">
      <input
        className="volumeSlider"
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
      />
    </div>
  );
}