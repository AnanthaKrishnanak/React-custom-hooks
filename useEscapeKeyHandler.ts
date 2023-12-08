import { KeyboardEvent, useEffect } from "react";
//not a hook paste it in your componet
export const useEscapeKeyHandler = () => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        //do what action that you wanna do when escape is clicked
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);
};
