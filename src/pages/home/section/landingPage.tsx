import { JSX } from "react";
import landing from "../../../assets/landing.jpg";
import Button1 from "../../../Components/buttons/button1";
import Button2 from "../../../Components/buttons/button2";

function LandingPage(): JSX.Element {
    return (
      <>
        <div
          className="relative py-10 px-6 h-full min-h-[100svh] md:h-[100svh] bg-cover bg-center bg-no-repeat flex items-center justify-center before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-60 flex-col"
          style={{ backgroundImage: `url(${landing})` }}
        >
          <div className="h-[60px] bg-black opacity-65 z-10"></div>
          <div className="z-10 text-center max-w-[90vw] md:max-w-[60vw]">
            <h1 className="text-2xl md:text-4xl text-white">
              Bienvenue sur <span>Ndao Ahandro</span> – La Communauté des
              Passionnés de Cuisine !
            </h1>
            <p className="text-sm text-white/75 mt-4">
              Découvrez, partagez et savourez les meilleures recettes du monde
              entier ! Rejoignez une communauté gourmande où chacun peut publier
              ses créations, explorer de nouvelles inspirations culinaires et
              échanger des astuces de chef. Que vous soyez amateur ou expert,
              ici, la cuisine est un plaisir à partager !
            </p>
            <div className="mt-6 flex gap-4 justify-center flex-wrap">
              <Button1 path="" text="Découvrir les recettes" />
              <Button2 text="Partager une recette" />
            </div>
          </div>
        </div>
      </>
    );
}

export default LandingPage;