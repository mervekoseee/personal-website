import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Bilişim Sistemleri Mühendisi",
          "Frontend Geliştirici",
          "Web Programlama ve Tasarım",
          "MERN Yığını Geliştiricisi"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
