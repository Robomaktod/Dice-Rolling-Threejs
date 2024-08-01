import { OrbitControls } from "@react-three/drei";


const ThreeScene: React.FC = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default ThreeScene;
