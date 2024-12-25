import { useEffect, useRef } from "react";
import { usePageCounter } from "../../zustand";

export const Page = () => {
  const pageCounter = usePageCounter((state) => state.pageCounter);

  const timeline = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    timeline.current.tweenTo(`page${pageCounter}`);
  }, [pageCounter]);

  return <div>page</div>;
};
