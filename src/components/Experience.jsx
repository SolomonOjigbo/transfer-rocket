import React from "react";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {MobileBanner }from "../assets"
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { startingFeatures } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import Features from "./Features";
import { MainText, TitleText } from '../elements/CustomTexts';
// import RocketCanvas from "./canvas/Rockets"





const Experience = () => {

  const sectionGetStartedRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionGetStartedRef.current,
      { autoAlpha: 0.9, y: 100 },
      {
        duration: 2,
        autoAlpha: 1,
        ease: 'power',
        y: -50,
        scrollTrigger: {
          trigger: sectionGetStartedRef.current,
          scrub: 1,
        },
      },
    );
  }, []);


  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        SENDING MONEY TO NIGERIA?
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        We offer the best exchange rate
        </h2>
      </motion.div>
      <section ref={sectionGetStartedRef} className={`${styles.paddings} `}>
      <div
        className={`${styles.innerWidth} mx-auto flex sm:flex-row flex-col items-center gap-5`}
      >
        <div style={{display: "flex", maxWidth: "800px", minWidth:"380px", height: "600px", justifyContent: "flex-start"}}>
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
          className='w-full object-contain'
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
          className='w-full object-contain'
        />
      </motion.div>
    </div>
        </div>
      
        <div style={{maxWidth: "100%", minWidth:"400px", height: "600px", margin: "auto"}}>
          <MainText title="How it works" textStyles="text-left text-orange-700" />
          <div className="max-w-[95%]">
            <TitleText
              title="Get Started With These Simple Steps"
              textStyles="text-left sm:text-[20px] sm:line-height-[40px] text-black-100"
            />
            {startingFeatures.map(({imgUrl, subtext, text, id}, index) => (
              <div key={id}>
              <Features flexStyle="flex flex-row" index={index} imgUrl={imgUrl} text={text}  subtext={subtext}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  
    </div>
  );
};

export default SectionWrapper(Experience, "work");
