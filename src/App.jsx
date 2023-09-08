import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, StarsCanvas, World } from "./components";
import WhatsNew from "./components/WhatsNew";
// import { CoinsCanvas } from "./components/canvas";

const App = () => {
  return (
    // <BrowserRouter>
      <div className='bg-white'>
        <div className='bg-white'>
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
