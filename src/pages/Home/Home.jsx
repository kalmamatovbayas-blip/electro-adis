import { useOutletContext } from "react-router";

import About from "./About/About";
import Vid from "./Vid/Vid";
import Features from "./Features/Features";
import Gallery from "./Gallery/Gallery";
import Testimonials from "./Testimonials/Testimonials";
import Pricing from "./Pricing/Pricing";

const Home = () => {

  const { openModal } = useOutletContext();

  return (
    <>
      <Vid openModal={openModal} />
      <About />
      <Features />
      <Gallery />
      <Testimonials />
      <Pricing openModal={openModal} />
    </>
  );
};

export default Home;