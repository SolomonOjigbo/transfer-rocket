import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useAnimations, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
// import {Solar} from "./Solar-sytem";

const Rocket = ({ isMobile }) => {

  return (
    <mesh>
      <hemisphereLight intensity={1.15} groundColor='black' />
      <spotLight
        position={[-30, 50, -20]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={4} />
      <Model 
      scale={isMobile ? 0.009 : 0.015}
      position={isMobile ? [0, -3, -2.2] : [2, -10.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        loop={true}
      />
    </mesh>
  );
};

//Rocket-scene 3D Model

function Model(props) {
    const { nodes, materials } = useGLTF('/rocket-scene/rocket_scene2.glb')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Moon_Moon1_0.geometry} material={materials.Moon1} />
        <mesh geometry={nodes.Hull_Hull1_0.geometry} material={materials.Hull1} position={[0, 322.933, 0]} scale={[0.594, 0.178, 0.594]} />
        <mesh geometry={nodes.Blast1_Blast_0.geometry} material={materials.Blast} position={[0, 98.943, 0]} />
        <mesh geometry={nodes.Blast2_Blast_0.geometry} material={materials.Blast} position={[0, 98.943, 0]} />
        <mesh geometry={nodes.Strut2_Strut_0.geometry} material={materials.Strut} position={[0, 98.943, 0]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes.Strut3_Strut_0.geometry} material={materials.Strut} position={[0, 98.943, 0]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.Strut4_Strut_0.geometry} material={materials.Strut} position={[0, 98.943, 0]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Asteroids_Moon1_0.geometry} material={materials.Moon1} />
        <mesh geometry={nodes.Asteroids1_Moon1_0.geometry} material={materials.Moon1} position={[54.733, -297.942, -30.871]} rotation={[0, 1.309, 0]} scale={1.781} />
        <mesh geometry={nodes.Strut1_Strut_0.geometry} material={materials.Strut} />
        <mesh geometry={nodes.StrutBlast1_Blast_0.geometry} material={materials.Blast} />
        <mesh geometry={nodes.StrutBlast2_Blast_0.geometry} material={materials.Blast} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes.StrutBlast3_Blast_0.geometry} material={materials.Blast} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.StrutBlast4_Blast_0.geometry} material={materials.Blast} rotation={[0, -Math.PI / 2, 0]} />
      </group>
    )
  }
  
  useGLTF.preload('/rocket-scene/rocket_scene2.glb')
  




const RocketCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5] }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
         autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Rocket isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
      
  );
};

export default RocketCanvas;
