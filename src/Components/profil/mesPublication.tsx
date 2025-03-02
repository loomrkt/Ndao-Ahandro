import { JSX } from "react";
import GridCenter from "../GridCenter/gridCenter";
import CardFood from "../cardFood";

function MesPublication():JSX.Element {
    return ( <>
    <div className="max-w-[1200px] mx-4  px-4 py-20 md:mx-auto bg-base-100 rounded-lg shadow-sm mt-10 flex flex-col items-center">
        <h1 className="text-3xl">Mes publications</h1>
        <div className="mt-10 mx-4">
        <GridCenter>
              <CardFood />
              <CardFood />
              <CardFood />
              <CardFood />
              <CardFood />
            </GridCenter>
        </div>
    </div>
    </> );
}

export default MesPublication;