"use client";

import { useRef, useState, useEffect, createRef } from "react";
import { gsap } from "gsap";

const MagneticPull = ({
  children,
  className,
  speed = 1,
  tollerance = 0.8,
  scale = 1.2,
  debug = false,
  borderRadius = 0,
  ...props
}) => {
  const $root = useRef();
  const $item = useRef();
  const $hover = useRef();
  const diffBound = useRef({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    gsap.killTweensOf($item.current);
    gsap.set($hover.current, {
      scale: scale,
      borderRadius,
      background: debug ? "rgba(0, 125, 255, .4)" : "transparent",
    });

    diffBound.current.x =
      ($root.current.getBoundingClientRect().width * scale -
        $root.current.getBoundingClientRect().width) /
      2;
    diffBound.current.y =
      ($root.current.getBoundingClientRect().height * scale -
        $root.current.getBoundingClientRect().height) /
      2;
  };

  const handleMouseLeave = () => {
    gsap.killTweensOf($item.current);
    gsap.to($item.current, {
      x: 0,
      y: 0,
      ease: "elastic.out(1.1, .4)",
      duration: 1.2,
    });
    gsap.set($hover.current, {
      scale: 1,
    });
  };

  const handleMouseMove = (e) => {
    const x = e.clientX || e.touches[0].clientX;
    const y = e.clientY || e.touches[0].clientY;

    const maxX =
      (($root.current.getBoundingClientRect().width -
        $item.current.getBoundingClientRect().width) /
        2) *
      tollerance;
    const maxY =
      (($root.current.getBoundingClientRect().height -
        $item.current.getBoundingClientRect().height) /
        2) *
      tollerance;

    const newX = gsap.utils.mapRange(
      0,
      $root.current.getBoundingClientRect().width * scale,
      -maxX,
      maxX,
      x - $root.current.getBoundingClientRect().x + diffBound.current.x
    );

    const newY = gsap.utils.mapRange(
      0,
      $root.current.getBoundingClientRect().height * scale,
      -maxY,
      maxY,
      y - $root.current.getBoundingClientRect().y + diffBound.current.y
    );

    gsap.killTweensOf($item.current);
    gsap.to($item.current, {
      x: newX,
      y: newY,
      ease: "power3.out",
      duration: speed,
    });
  };

  return (
    <button
      ref={$root}
      className={`magnetic-pull ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      onTouchStart={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleMouseLeave}
      {...props}
    >
      <span ref={$item} className="magnetic-pull--item">
        {children}
      </span>
      <span ref={$hover} className="magnetic-pull--hover" />
    </button>
  );
};

export default MagneticPull;
