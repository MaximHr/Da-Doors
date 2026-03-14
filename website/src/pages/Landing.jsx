import { useEffect, useState } from "react";
import About from "../components/About";
import { FAQ } from "../components/FAQ";
import FeaturedDoors from "../components/FeaturedDoors";
import HeroSlider from "../components/HeroSlider";
import { getHomePageDoors } from "../api";
import Contact from "../components/Contact";
import HowWeWork from "../components/HowWeWork";
import WhyChooseUs from "../components/WhyChooseUs";

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
			<WhyChooseUs />
			<HowWeWork />
      <About />
      <FAQ />
			<Contact />
    </>
  );
};

export default Landing;
