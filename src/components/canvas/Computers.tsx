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
  const computer = useGLTF('./test/scene.gltf');
  const isMobile = screen === 'mobile';

  return (
    <>
      <hemisphereLight intensity={isMobile ? 0.25 : 0.15}/>
      {!isMobile && (
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
        />
      )}
      <pointLight intensity={isMobile ? 1.5 : 1} />
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
    </>
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

  const isMobile = screenType === 'mobile';

  return (
    <Canvas
      frameloop="demand"
      shadows={false}
      dpr={isMobile ? [0.5, 1] : [1, 1.5]}
      camera={{
        position: isMobile ? [15, 2, 3] : [20, 3, 5],
        fov: isMobile ? 30 : 25
      }}
      gl={{
        preserveDrawingBuffer: false,
        alpha: true,
        antialias: false,
        powerPreference: isMobile ? 'default' : 'high-performance',
        failIfMajorPerformanceCaveat: false,
      }}
      style={{
        background: 'transparent',
        width: '100%',
        height: '100%',
      }}
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
