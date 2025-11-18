import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';
import {
  checkScreen,
  mediaQueries,
  type SCREEN_TYPE,
} from '../../constants/responsive';

const Computers = ({ screen }: { screen: SCREEN_TYPE }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={screen === 'mobile' ? 0.37 : screen === 'tablet' ? 0.5 : 0.7}
        position={
          screen === 'mobile'
            ? [0, -2, -0.45]
            : screen === 'tablet'
            ? [0, -2.5, -1]
            : [0, -2.3, -1.2]
        }
        rotation={[-0.01, -0.9, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [screenType, setScreenType] = useState<SCREEN_TYPE>('desktop');

  useEffect(() => {
    const handleScreenResize = () => {
      setScreenType(checkScreen() as SCREEN_TYPE);
    };
    handleScreenResize();
    mediaQueries.forEach((mq) => {
      mq.query.addEventListener('change', handleScreenResize);
    });
    return () => {
      mediaQueries.forEach((mq) => {
        mq.query.removeEventListener('change', handleScreenResize);
      });
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers screen={screenType} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
