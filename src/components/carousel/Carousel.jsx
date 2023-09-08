import React from "react";

import Carousel3d from "./Carousel3d";
import CarouselCard from "./CarouselCard";

import Carousel1 from "../../assets/easy.jpg";
import Carousel2 from "../../assets/track.jpg";
import Carousel3 from "../../assets/manage.jpg";
import Carousel4 from "../../assets/quick.jpg";

const CarouselSlider = () =>{
  return (
    <div
    //   className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        background:
          "radial-gradient(47.45% 302.83% at 97.45% 85.92%, rgba(250, 250, 250, 0.48) 0%, rgba(1, 82, 31, 0) 100%), radial-gradient(41.07% 57.4% at 8.28% 4.34%, rgba(255, 255, 255, 0.61) 0%, rgba(241, 241, 237, 0.122) 100%), rgba(212, 216, 213, 0.069)",
      }}
    >
      <div style={{ width: 600, height: "86vh" }}>
        <Carousel3d
          cards={[
            {
              key: 1,
              content: <CarouselCard title="Easy To Track" image={Carousel1} />,
            },
            {
              key: 2,
              content: <CarouselCard title="Fast & Secure" image={Carousel2} />,
            },
            {
              key: 3,
              content: (
                <CarouselCard title="Manage Your Receivers" image={Carousel3} />
              ),
            },
            {
              key: 4,
              content: (
                <CarouselCard title="Quick Signup" image={Carousel4} />
              ),
            },
          ]}
          offset={2}
        />
      </div>
    </div>
  );
}

export default CarouselSlider;
