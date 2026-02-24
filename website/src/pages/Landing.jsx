import { useEffect, useState } from "react";
import About from "../components/About";
import { FAQ } from "../components/FAQ";
import FeaturedDoors from "../components/FeaturedDoors";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import { getHomePageDoors } from "../api";

const Landing = () => {
  const [doors, setDoors] = useState([{}, {}, {}, {}]);

  useEffect(() => {
    let isMounted = true;

    const fetchDoors = async () => {
      const data = await getHomePageDoors();
      if (isMounted) {
        setDoors(data);
      }
    };

    fetchDoors();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <HeroSlider />
      <FeaturedDoors doors={doors} />
      <About />
      <FAQ />
      <Footer />
    </>
  );
};

export default Landing;
