import { useEffect, useState, useRef } from "react"


export const useOnClickOutside = (initialExpanded) => {
  const [expanded, setExpanded] = useState(initialExpanded);
  const wrapperRef = useRef(null);



  function handleClickOutside(event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setExpanded(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return { expanded, setExpanded, wrapperRef }
}