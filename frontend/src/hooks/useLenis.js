import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function useLenis(wrapperSelector, contentSelector) {

 const lenisRef = useRef()

  useEffect(() => {
    // Only initialize if both wrapper and content are provided
    if (!wrapperSelector || !contentSelector) return;

    const wrapper = document.querySelector(wrapperSelector);
    const content = document.querySelector(contentSelector);

    // Safety check in case elements are not found
    if (!wrapper || !content) return;

     
     lenisRef.current = new Lenis({
      wrapper,
      content,
      smooth: true,
    });

    const raf = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenisRef.current.destroy();
  }, [wrapperSelector, contentSelector]);

 return lenisRef.current

}
