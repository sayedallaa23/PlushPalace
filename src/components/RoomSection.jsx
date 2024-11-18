import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { SoftShadows, Float, CameraControls, Sky } from "@react-three/drei";
import { easing } from "maath";
import { Model as Room } from "./Room";

function Light() {
  const ref = useRef();
  useFrame((state, delta) => {
    easing.dampE(
      ref.current.rotation,
      [(state.pointer.y * Math.PI) / 50, (state.pointer.x * Math.PI) / 20, 0],
      0.2,
      delta
    );
  });
  return (
    <group ref={ref}>
      <directionalLight
        position={[5, 5, -8]}
        castShadow
        intensity={5}
        shadow-mapSize={2048}
        shadow-bias={-0.001}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-8.5, 8.5, 8.5, -8.5, 0.1, 20]}
        />
      </directionalLight>
    </group>
  );
}

export default function RoomSection() {
  const [bad, setBad] = useState(false);
  const [debug, setDebug] = useState(true);
  const [enabled, setEnabled] = useState(true);
  const [size, setSize] = useState(35);
  const [focus, setFocus] = useState(0.5);
  const [samples, setSamples] = useState(16);

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center bg-[#D8DED9] py-[2rem] px-[2rem] md:py-[8rem] md:px-[4rem]">
      <div className="md:w-[50vw] text-bg mt-[2rem] md:mt-0">
        <h1 className="text-[2rem] md:text-[2.8rem] mb-[1rem] font-black">Create Your Ideal Home</h1>
        <p className="md:w-[70%] text-[#2A2D38]">
          Dive into our 3D room experience and control the lighting with your
          mouse. See how our elegant furniture can elevate your home's aesthetic
          and functionality.
        </p>
      </div>
      <div className="h-[25vh] md:h-[30vh] xl:h-[100vh] w-[90vw] md:w-[50vw] rounded-2xl overflow-hidden">
        <Canvas shadows camera={{ position: [5, 2, 10], fov: 50 }}>
          {enabled && (
            <SoftShadows
              size={size}
              focus={focus}
              samples={bad ? Math.min(6, samples) : samples}
            />
          )}
          {/* <CameraControls makeDefault /> */}
          <color attach="background" args={["#d0d0d0"]} />
          <fog attach="fog" args={["#d0d0d0", 8, 35]} />
          <ambientLight intensity={2} />
          <Light />
          <Room scale={0.5} position={[0, -1, 0]} />
          <Sphere />
          <Sphere position={[2, 4, -8]} scale={0.9} />
          <Sphere position={[-2, 2, -8]} scale={0.8} />
          <Sky inclination={0.52} scale={20} />
        </Canvas>
      </div>
    </div>
  );
}

function Sphere({
  color = "hotpink",
  floatIntensity = 15,
  position = [0, 5, -8],
  scale = 1,
}) {
  return (
    <Float floatIntensity={floatIntensity}>
      <mesh castShadow position={position} scale={scale}>
        <sphereGeometry />
        <meshBasicMaterial color={color} roughness={1} />
      </mesh>
    </Float>
  );
}
