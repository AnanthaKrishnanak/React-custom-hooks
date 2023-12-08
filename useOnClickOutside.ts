import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

// Usage
// create a ref and attach it to the component that you want to handle 
// create a function to handle what should happen when we click out side of that element
// pass the ref and function to useOnClickOutside hook


export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>, 
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listner = (event: Event) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event); // call the handler only if the click is outside of the element passed
    };

    document.addEventListener("mousedown", listner);
    document.addEventListener("touchstart", listner);

    return () => {
      document.removeEventListener("mousedown", listner);
      document.removeEventListener("touchstart", listner);
    };
  }, [ref, handler]);
};
