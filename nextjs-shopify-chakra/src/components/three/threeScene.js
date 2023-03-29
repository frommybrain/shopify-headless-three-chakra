import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';

const ThreeScene = () => {
  const meshRef = useRef();
  
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    
    // Code that uses the window object can be executed here
  }, []);

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={meshRef}>
        <boxGeometry />
        <meshStandardMaterial color={'#1565c0'} />
      </mesh>
    </Canvas>
  );
};

export default ThreeScene;
