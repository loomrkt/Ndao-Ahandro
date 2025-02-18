import { JSX } from "react";
import LandingPage from "./section/landingPage";
import TopRecettes from "./section/topRecettes";
import CatégoriesRecettes from "./section/catégoriesRecettes";
import Temoignage from "./section/temoignage";
import Faq from "./section/faq";
import Gallery from "./section/gallery";
import Newsletter from "./section/newsletter";

function Home(): JSX.Element {
  return (
    <>
      <LandingPage />
      <TopRecettes />
      <Faq />
      <CatégoriesRecettes />
      <Gallery />
      <Temoignage />
      <Newsletter />
    </>
  );
}

export default Home;
