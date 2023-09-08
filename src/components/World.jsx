import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {styles} from '../styles';
// import { MainText, TitleText } from '../element';
import MapIcon from './atom/MapIcon';
import { exploreWorlds } from '../constants';
import { MainText, TitleText } from '../elements/CustomTexts';

gsap.registerPlugin(ScrollTrigger);

const World = () => {
  const sectionWorldRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionWorldRef.current,
      { autoAlpha: 0, y: 100 },
      {
        duration: 3,
        autoAlpha: 1,
        ease: 'power',
        y: -50,
        scrollTrigger: {
          trigger: sectionWorldRef.current,
          // scrub: 1,
        },
      },
    );
  }, []);

  return (
    <section className={`${styles.paddings} bg-gray-800 `}>
      <div className={`${styles.innerWidth} mx-auto`}>
        <MainText title="A Fast and secure way to send money on the go" 
        textStyles="text-center font-black sm:text-[10px] md:text-[25px] text-[30px] break-words sm:line-height-[10px] text-orange-500"
        />
        <TitleText
          title="Transfer money to family and friends around the world and invite them to use Transfer Rocket"
          
          textStyles="text-center md:text-[25px] sm:text-[15px] xs:text-[15px] text-[20px] text-white sm:line-height-[15px] xs:line-height-[10px]"
        />
        <div
          style={{ marginTop: '100px' }}
          ref={sectionWorldRef}
          className="relative"
        >
          <img src="/map.png" alt="map"  />
          {exploreWorlds.map((item, i) => (
            <MapIcon {...item} className="relative" key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default World;
