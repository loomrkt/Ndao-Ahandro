import { JSX } from "react";
import LandingPage from "./section/landingPage";
import TopRecettes from "./section/topRecettes";
import CatégoriesRecettes from "./section/catégoriesRecettes";
import Temoignage from "./section/temoignage";

function Home(): JSX.Element {
  return (
    <>
      <LandingPage />
      <TopRecettes />
      <CatégoriesRecettes />
      <Temoignage />
    </>
  );
}

export default Home;
