import React from 'react';
import ThreeScene from './components/test';
import { Canvas } from '@react-three/fiber';

const App: React.FC = () => {
    
  return (
    <div className="w-full h-screen">
      <Canvas>
        <ThreeScene />
      </Canvas>
    </div>
  );
};

export default App;
