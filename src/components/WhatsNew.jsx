import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {styles }from '../styles';
import { MainText, TitleText} from '../elements/CustomTexts';
import { newFeatures, reasons } from '../constants';
import Features from './Features';
import CarouselSlider from './carousel/Carousel';
import { AppStoreBnt, GooglePlayBnt } from '../assets';
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import {MobileBanner }from "../assets"

gsap.registerPlugin(ScrollTrigger);

const WhatsNew = () => {
  const sectionWhatsNewRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionWhatsNewRef.current,
      { autoAlpha: 1, y: 100 },
      {
        duration: 2,
        autoAlpha: 1,
        ease: 'power',
        y: -50,
        scrollTrigger: {
          trigger: sectionWhatsNewRef.current,
          scrub: 1,
        },
      },
    );
  }, []);

  return (
    <section ref={sectionWhatsNewRef} className={`${styles.paddings} pt-40 pb-40 px-20 sm:pt-20 sm:pb-20 sm:px-5`} style={{
      background:
          "radial-gradient(47.45% 302.83% at 97.45% 85.92%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.714) 100%), radial-gradient(41.07% 57.4% at 8.28% 4.34%, rgba(255, 255, 255, 0.949) 0%, rgba(255, 255, 255, 0.623) 100%), rgb(212, 216, 213)",
      
    }} >
      <div
        className={`${styles.innerWidth} flex sm:flex-row flex-col-reverse items-center justify-center`}
      >
        <div className="max-w-[95%]">
          <MainText title="Why People Use Transfer Rocket" textStyles="text-left" />
          <TitleText
            title="Reasons to choose us"
            textStyles="text-left sm:text-[48px] sm:line-height-[30px]"
          />
          <div className='flex sm:flex-row flex-wrap'>

          <div>
            {newFeatures.map((feature, index) => (
              <div key={feature.id}>
              
              <Features
                flexStyle="flex flex-row "
                index={index}
                {...feature}
                icon={false}
              />
              </div>
            ))}
          </div>

          <div >
            {reasons.map((feature, index) => (
              <div key={feature.id}>
              
              <Features
                flexStyle="flex flex-row "
                index={index}
                {...feature}
                icon={false}
              />
              </div>
            ))}
          </div>
          </div>
          <div style={{display: "flex", flexDirection: "row", marginTop: "50px", justifyContent: "flex-start", gap: "25px"}}>
          <a href="https://apps.apple.com/us/app/transfer-rocket-remit-today/id6444543188">

          <img src={AppStoreBnt} style={{height: 50}} alt="AppStore" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.org.TransferRocket&pli=1">

          <img src={GooglePlayBnt} style={{height: 50}} alt="GooglePlay" />
          </a>
        </div>
        </div>
        <div className="sm:w-1/2 w-full">
          {/* <img src="/whats-new.png" alt="whatsnew" className="w-full" /> */}
          {/* <CarouselSlider /> */}
          <div
      
      className='w-full orange-gradient p-[1px] rounded-[20px] '
    >
      <motion.div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        animate={{
          x: [0, 24, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        
        className='bg-#e4dfdf border-spacing-1 rounded-[20px] py-5 px-12 min-h-[380px] flex justify-evenly items-center flex-col -ml-60'
      >
        <img
          src={MobileBanner}
          alt='How it Works'
          // className='w-full object-contain'
        />
      
      </motion.div>
      <motion.div
          animate={{
            x: [3, 24, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          variants={fadeIn("right", "spring")}
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}

        //   variants={{
        //   hidden: { opacity: 0.7, y: 75},
        //   visible: { opacity: 1 , y: 0},
        // }}
        // transition={{ duration: 3000, easing: 400, delay: 300}}
        // initial="hidden"
        // animate="visible"
        
        className='bg-transparent border-spacing-1 rounded-[20px] mb-20 py-8 px-12 min-h-[380px] flex justify-evenly items-center flex-col -mt-80 -mr-60'
      >
        <img
          src="/rocket-signin.png"
          alt='How it Works'
          // className='w-full object-contain'
        />
      </motion.div>
    </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
