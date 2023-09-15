import React from "react";
import moon from "./moon.png";
import land from "./land.png";
import cat from "./cat.gif";

import { useRef } from "react";

import { Parallax, ParallaxLayer, parallaxLayer } from "@react-spring/parallax";

const App = () => {

  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
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
        <ParallaxLayer offset={0.2} speed={0.05} sticky={{start: 0.1, end:3.5}}
        onClick={() => ref.current.scrollTo(3)}
        >
          <img src={cat} alt="cat/gif" />
          
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={2} onClick={() => ref.current.scrollTo(3)}>
          <h1>MEOW MEOW!</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;