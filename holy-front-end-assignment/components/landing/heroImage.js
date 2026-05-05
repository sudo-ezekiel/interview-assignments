"use client";

import MagneticPull from "../utils/magneticPull";
import Image from "next/image";
import styles from "./heroImg.module.css";

import ArrowPointingAtCursor from "../utils/arrowPointingAtCursor";

const HeroImage = ({ src, href }) => {
  return (
    <div className={styles.magneticWrapper}>
      <MagneticPull
        className="magneticpull"
        scale={2}
        tollerance={0.8}
        speed={0.3}
        debug={false}
        borderRadius={0}
        onClick={() => {
          console.log("click, go to", href);
          window.open(href, "_self");
        }}
      >
        <div className={styles.pointingArrowBG}>
          <ArrowPointingAtCursor />
        </div>
      </MagneticPull>
      <Image
        src={src}
        alt="Vercel Logo"
        className={styles.heroImg}
        priority
        layout="fill"
      />
    </div>
  );
};

export default HeroImage;
