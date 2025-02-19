import { JSX } from "react";
import CardFood from "../../Components/cardFood";
import GridCenter from "../../Components/GridCenter/gridCenter";

function Recette():JSX.Element {
    return ( <>
        <GridCenter>
          <CardFood />
          <CardFood />
          <CardFood />
          <CardFood />
          <CardFood />
        </GridCenter>
    </> );
}

export default Recette;