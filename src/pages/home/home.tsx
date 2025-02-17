import { JSX } from "react";
import LandingPage from "./section/landingPage";
import TopRecettes from "./section/topRecettes";

function Home(): JSX.Element {
  return (
    <>
      <LandingPage />
      <TopRecettes />
    </>
  );
}

export default Home;
