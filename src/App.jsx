import React from "react";
import moon from "./moon.png";
import land from "./land.png";
import cat from "./cat.gif";

import { useRef, useEffect, useState } from "react";

import { Parallax, ParallaxLayer, parallaxLayer } from "@react-spring/parallax";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  const ref = useRef();

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 1000);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);




  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: isMobile ? "contain" : "cover",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          sticky={{ start: 0.1, end: 3.5 }}
          onClick={() => ref.current.scrollTo(3)}
        >
          <img
            src={cat}
            alt="cat/gif"
            style={{
              maxWidth: "100%",
              width: isMobile ? "50%" : "auto",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.2}
          speed={2}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h1>MEOW MEOW!</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;
