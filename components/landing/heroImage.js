"use client";

import MagneticPull from "../utils/magneticPull";
import Image from "next/image";
import styles from "./heroImg.module.css";

import ArrowPointingAtCursor from "../utils/arrowPointingAtCursor";

const HeroImage = ({ src }) => {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "50%",
        height: "445px",
        width: "445px",
      }}
    >
      <MagneticPull
        className="magneticpull"
        scale={2}
        tollerance={0.8}
        speed={0.3}
        onClick={() => {
          console.log("click");
        }}
      >
        <div
          style={{
            width: "400px",
            height: "400px",
            position: "absolute",
            top: "-300px",
            left: "-200px",
          }}
        >
          <ArrowPointingAtCursor />
        </div>
      </MagneticPull>
      <Image
        src={src}
        alt="Vercel Logo"
        className={styles.heroImg}
        width={445}
        height={445}
        priority
      />
    </div>
  );
};

export default HeroImage;
