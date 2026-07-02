import React, { useEffect, useRef } from "react";
import "./effects.scss";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canUseCustomCursor = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!canUseCustomCursor || !dot || !ring) return undefined;

    let animationFrame;

    const moveCursor = (event) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;
      dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      dot.classList.add("is-visible");
      ring.classList.add("is-visible");
    };

    const animateRing = () => {
      current.current.x += (target.current.x - current.current.x) * 0.16;
      current.current.y += (target.current.y - current.current.y) * 0.16;
      ring.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      animationFrame = window.requestAnimationFrame(animateRing);
    };

    const updateHoverState = (event) => {
      const interactiveElement = event.target.closest(
        "a, button, input, textarea, select, [role='button'], .menu-icons, .card-item, .item"
      );
      dot.classList.toggle("is-active", Boolean(interactiveElement));
      ring.classList.toggle("is-active", Boolean(interactiveElement));
    };

    const hideCursor = () => {
      dot.classList.remove("is-visible");
      ring.classList.remove("is-visible");
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", updateHoverState);
    document.addEventListener("mouseout", updateHoverState);
    document.addEventListener("mouseleave", hideCursor);
    animateRing();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", updateHoverState);
      document.removeEventListener("mouseout", updateHoverState);
      document.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <>
      <span className="custom-cursor-dot" ref={dotRef} aria-hidden="true" />
      <span className="custom-cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
