import { useState, useEffect } from "react";

export default function useGetScreenDiamensions() {

  const [screenDiamensions, setScreenDiamensions] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

  const handleWindowResize = () => {
    setScreenDiamensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    
  };

  useEffect(() => {

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return screenDiamensions;

}



