import { JSX } from "react";
import LandingPage from "./section/landingPage";
import TopRecettes from "./section/topRecettes";
import CatégoriesRecettes from "./section/catégoriesRecettes";

function Home(): JSX.Element {
  return (
    <>
      <LandingPage />
      <TopRecettes />
      <CatégoriesRecettes />
    </>
  );
}

export default Home;
