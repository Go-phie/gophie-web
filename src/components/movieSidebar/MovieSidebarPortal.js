import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function MovieSidebarPortal({ children }) {
  const elRef = useRef(null);

  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    const movieSidebarRoot = document.getElementById("movieSidebar");
    movieSidebarRoot.appendChild(elRef.current);
    return () => movieSidebarRoot.removeChild(elRef.current);
  }, []);
  return createPortal(<div>{children}</div>, elRef.current);
}
