import { JSX } from "react";
import CardFood from "../../../Components/cardFood";
import GridCenter from "../../../Components/GridCenter/gridCenter";

function TopRecettes(): JSX.Element {
    return (
      <>
        <div className="p-6 py-20 w-full">
          <div className="text-center md:max-w-[600px] mx-auto">
            <h2 className="mb-4 text-3xl tracking-tight font-bold sm:text-4xl">
              Top des recettes les plus populaires
            </h2>
            <p className="mt-4 dark:text-red-600 text-sm text-wp">
              Les recettes préférées de notre communauté ! Testées, notées et
              approuvées, elles garantissent succès et saveurs. Essayez-les et
              régalez-vous !
            </p>
          </div>
          <div className="flex justify-center items-center max-w-[1000px] mx-auto mt-10">
            <GridCenter>
              <CardFood />
              <CardFood />
              <CardFood />
              <CardFood />
              <CardFood />
            </GridCenter>
          </div>
        </div>
      </>
    );
}

export default TopRecettes;