import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import SquareBorder1 from "../../assets/square-border1.png";

function Card({ title, image, currentSlide, currentIndex }) {
  const [show, setShown] = useState(false);

  const styles = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      style={{ ...styles, height: "fit-content" }}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          // backdropFilter: "blur(22px)",
          position: "relative",
          height: "90%"
        }}
      >
        <div style={{ position: "absolute", width: "100%", height: "90%" }}>
          <img
            src={SquareBorder1}
            alt="SquareBorder"
            style={{ objectFit: "fill", width: "100%", height: "90%" }}
          />
        </div>

        <div
          style={{
            padding: 16,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 300,
              height: 450,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={image}
              alt="title"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </div>
          {title && (
            <div
              style={{
                marginTop: 10,
                fontWeight: 400,
                fontSize: 18,
                lineHeight: "100%",
                color: "#d58505",
              }}
            >
              {title}
            </div>
          )}
        </div>
      </div>
    </animated.div>
  );
}

export default Card;
