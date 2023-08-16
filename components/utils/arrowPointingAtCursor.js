"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ArrowPointingAtCursor = () => {
  const [eyePos, setEyePos] = useState({});

  const element = useRef();

  useEffect(() => {
    const handleMouseMove = (evt) => {
      // current element bounding client
      let rekt = element.current.getBoundingClientRect();

      // simple math to get the current element position on screen
      let anchorX = rekt.left + rekt.width / 2;
      let anchorY = rekt.top + rekt.height / 2;

      let dx = evt.pageX - anchorX;
      let dy = evt.pageY - anchorY;

      let a = null;
      let rawAngle = null;

      // atan
      let currentRawAngle = (Math.atan(dy / dx) * 180) / Math.PI;

      if ((dx > 0 && dy < 0) || (dx > 0 && dy > 0)) {
        currentRawAngle = 180 + currentRawAngle;
      } else if (dx < 0 && dy > 0) {
        currentRawAngle = 360 + currentRawAngle;
      }
      if (a == 0) a = currentRawAngle;
      else {
        let da = currentRawAngle - rawAngle;
        a += da;
        if ((da < 0 && Math.abs(da) > 360 + da) || da > 180) {
          a += da > 180 ? -360 : 360;
        }
      }
      rawAngle = currentRawAngle; //record the last raw angle

      // could go to a ref.current, but I feel like I am making things too complicated.
      setEyePos(a);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="arrowcircle">
      <div className="align">
        <Image
          src="/assets/img/arrow.png"
          alt="Vercel Logo"
          ref={element}
          className="arrow"
          width={76}
          height={60}
          style={{
            transform: `rotate(${eyePos}deg)`,
            filter: `invert(15%) sepia(5%) saturate(873%) hue-rotate(145deg) brightness(90%) contrast(84%)`,
          }}
          priority
        />
      </div>
    </div>
  );
};

export default ArrowPointingAtCursor;
