import { useState, useEffect } from "react";
import HomeDesktop from "./Home";
import HomeMobile from "./HomeMobile";

function HomeLoad() {
  const [mobile, setMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  return mobile ? <HomeMobile /> : <HomeDesktop />;
}

export default HomeLoad;