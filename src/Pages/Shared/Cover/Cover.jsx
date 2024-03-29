import React from 'react';
import { Parallax} from "react-parallax";
const Cover = ({img,title}) => {
    return (
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="Our Menu"
        strength={-100}
      >
        <div
          className="hero min-h-[500px]"
          //   style={{
          //     backgroundImage: `url(${img})`,
          //   }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>

              <p className="mb-5 text-2xl">Would you like to try a dish?</p>
            </div>
          </div>
        </div>{" "}
      </Parallax>
    );
};

export default Cover;