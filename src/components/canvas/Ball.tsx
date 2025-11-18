import { Suspense, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';

import CanvasLoader from '../Loader';
interface IProps {
  icon: string;
  techName: string;
}
const Ball = memo((props: { imgUrl: string }) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={0.3}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 5]} />
        <meshStandardMaterial
          color="#6e44c9"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
});

Ball.displayName = 'Ball';

const BallCanvas = memo(({ icon, techName }: IProps) => {
  return (
    <div className="w-28 h-28 relative group cursor-pointer">
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.1}
            autoRotate={false}
          />
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
      <div className="inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-black/70 text-white px-3 py-1.5 rounded-xl text-sm backdrop-blur-sm">
        {techName}
      </div>
    </div>
  );
});

BallCanvas.displayName = 'BallCanvas';

export default BallCanvas;
