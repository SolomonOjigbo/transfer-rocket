'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const MainText = ({ title, textStyles }) => {
  const mainTextRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      mainTextRef.current,
      { autoAlpha: 0, x: 20 },
      {
        autoAlpha: 1,
        delay: 0.5,
        duration: 1,
        x: 0,
        scrollTrigger: {
          trigger: mainTextRef.current,
        },
      },
    );
  }, []);

  return (
    <p
      className={`font-bold lg:text-[30px] ${textStyles}`}
      ref={mainTextRef}
    >
      {Array.from(title).map((letter, index) => (
        <span key={index}>{letter === ' ' ? '\u00A0' : letter}</span>
      ))}
    </p>
  );
};

export const TitleText = ({ title, textStyles }) => {
  const mainTitleRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      mainTitleRef.current,
      { autoAlpha: 0, x: 20 },
      {
        autoAlpha: 1,
        delay: 0.5,
        duration: 1,
        x: 0,
        scrollTrigger: {
          trigger: mainTitleRef.current,
        },
      },
    );
  }, []);

  return (
    <h2
      className={` md:text-[20px] lg:text-[20px] md:leading-[25px] leading-[30px] lg:line-height-[40px]text-black ${textStyles}`}
      ref={mainTitleRef}
    >
      {title}
    </h2>
  );
};
