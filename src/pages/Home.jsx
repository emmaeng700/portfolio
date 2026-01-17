import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon, linkedin, github, twitter } from "../assets/icons";
import { Bird, Island, Plane, Sky } from "../models";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.4;
    audio.loop = true;
    
    // Start playing immediately - browser autoplay policy will be handled
    const playAudio = () => {
      audio.play().catch(() => {
        // If autoplay fails, try again on any user interaction
        const startOnInteraction = () => {
          audio.play().then(() => {
            document.removeEventListener('click', startOnInteraction);
            document.removeEventListener('keydown', startOnInteraction);
            document.removeEventListener('touchstart', startOnInteraction);
          });
        };
        
        document.addEventListener('click', startOnInteraction);
        document.addEventListener('keydown', startOnInteraction);
        document.addEventListener('touchstart', startOnInteraction);
      });
    };

    playAudio();

    return () => {
      audio.pause();
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlayingMusic) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative overflow-hidden'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-20 left-2 right-2'>
        {!showTip ? (
          <button
            onClick={() => setShowTip(true)}
            className='bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold cursor-pointer transition-all'
          >
            ?
          </button>
        ) : (
          <div className='bg-gray-900 bg-opacity-75 rounded-lg px-4 py-3 max-w-xs flex justify-between items-start gap-2'>
            <p className='text-sm text-gray-300'>
              💡 <span>Move plane: arrow keys, drag with mouse, or touch & swipe on mobile</span>
            </p>
            <button
              onClick={() => setShowTip(false)}
              className='text-gray-400 hover:text-white text-lg font-bold cursor-pointer'
            >
              ✕
            </button>
          </div>
        )}
      </div>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>

      {/* Social Media Links */}
      <div className='absolute bottom-2 right-2 flex gap-2'>
        <a
          href='https://www.linkedin.com/in/emmanuel-oppong-acheampong/'
          target='_blank'
          rel='noopener noreferrer'
          className='w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300'
          aria-label='LinkedIn'
        >
          <img src={linkedin} alt='LinkedIn' className='w-5 h-5 object-contain filter brightness-0 invert' />
        </a>
        <a
          href='https://github.com/emmaeng700'
          target='_blank'
          rel='noopener noreferrer'
          className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-900 transition-colors duration-300'
          aria-label='GitHub'
        >
          <img src={github} alt='GitHub' className='w-5 h-5 object-contain filter brightness-0 invert' />
        </a>
        <a
          href='https://x.com/oppongemmachuks'
          target='_blank'
          rel='noopener noreferrer'
          className='w-10 h-10 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition-colors duration-300'
          aria-label='Twitter'
        >
          <img src={twitter} alt='Twitter' className='w-5 h-5 object-contain filter brightness-0 invert' />
        </a>
      </div>
    </section>
  );
};

export default Home;