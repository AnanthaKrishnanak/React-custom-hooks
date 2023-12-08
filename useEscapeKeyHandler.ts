import { KeyboardEvent, useEffect } from "react";

export const useEscapeKeyHandler = (handleFn: () => void) => {
  useEffect(() => {
    const handler = (e: Event) => {
      if (e instanceof KeyboardEvent && e.key === "Escape") {
        handleFn();
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [handleFn]);
};
