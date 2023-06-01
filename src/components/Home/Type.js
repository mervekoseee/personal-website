import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Türkische Tänze für Kinder ",
          "Ballsportarten für Kinder",
          "Familientage für Kinder",
          "Türkische Tänze für Frauen",
          "Ballsportarten für junge Menschen"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 90,
      }}
    />
  );
}

export default Type;
