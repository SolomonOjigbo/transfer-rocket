import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, StarsCanvas, World } from "./components";
import WhatsNew from "./components/WhatsNew";
import ReactPlayer from "react-player";
// import { CoinsCanvas } from "./components/canvas";

const App = () => {
  return (
    // <BrowserRouter>
      <div className='bg-white'>
         <div className="relative pt-[56.25%]  lg:w-[1280px] xl:w-[1440px] xs:w-auto lg:mx-auto lg:h-[700px] xs:h-auto">

<ReactPlayer url='https://www.youtube.com/watch?v=YuZ7Y-EYB3E' loop={true} playing={true} muted={true} width="100%" height="100%" style={{position: "absolute", top: 0, left: 0}}/>
</div>
        <div className='bg-white w-full'>
          <Navbar/>
          <Hero />
         
        </div>
        <About />
        <div>
        {/* <CoinsCanvas/> */}
        <Experience />
        </div>
        <World />
        <WhatsNew />
        <div className='relative z-0 bg-gray-800'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    // </BrowserRouter>
  );
}

export default App;
