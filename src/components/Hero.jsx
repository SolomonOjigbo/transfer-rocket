import { motion } from "framer-motion";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import { AppStoreBnt, GooglePlayBnt } from "../assets";
import ReactPlayer from 'react-player'


const Hero = () => {
  return (
    <section className={` relative max-h-[680px] flex flex-row`}>
      <div
        className={`relative inset-15 top-[180px] mx-auto max-w-7xl min-h-80 ${styles.paddingX} flex items-center gap-10 mb-60 `}
      >
       <div className={`flex flex-col md:flex-row gap-10 mx-auto `}>

        <div className="flex-col md:w-1/2 lg:w-full mt-10">
          <div>
          <h1 className={`${styles.heroHeadText} text-green-700`}>
            Transfer<span className='text-[#ff9501]'> Rocket</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-gray-700`}>
            Instant Money Transfer from <br  />
            Uk to Nigeria at unbeatable rates
          </p>
          </div>
        <div style={{display: "flex", flexDirection: "row", marginTop: "30px", justifyContent: "flex-start", gap: "25px"}}>
          <a href="https://apps.apple.com/us/app/transfer-rocket-remit-today/id6444543188">

          <img src={AppStoreBnt} style={{height: 50}} alt="AppStore" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.org.TransferRocket&pli=1">

          <img src={GooglePlayBnt} style={{height:50}} alt="GooglePlay" />
          </a>
        </div>
        </div>

        <div className="flex md:w-1/2 lg:w-1/2 -my-5">

    <ReactPlayer url='https://www.youtube.com/watch?v=YuZ7Y-EYB3E' loop={true} playing={true} muted={true} />
        </div>
          </div>
       

      </div>

     

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
