import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {styles }from '../styles';
import { MainText, TitleText} from '../elements/CustomTexts';
import { newFeatures, reasons } from '../constants';
import Features from './Features';
import CarouselSlider from './carousel/Carousel';
import { AppStoreBnt, GooglePlayBnt } from '../assets';

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
          <CarouselSlider />
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
