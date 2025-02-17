import CardTemoignage from "../../../Components/cardTemoignage";
import Carossel from "../../../Components/carossel";

function Temoignage() {
    return ( <>
            <div className="p-6 py-20 w-full">
            <div className="text-center md:max-w-[600px] mx-auto">
                <h2 className="text-3xl">Voici quelque Temoignage de nos utilisateurs</h2>
            </div>
            <div className="flex justify-center items-center max-w-[1000px] mx-auto mt-10">
                <Carossel>
                    <CardTemoignage />
                    <CardTemoignage />
                    <CardTemoignage />
                </Carossel>
            </div>
        </div>
    </> );
}

export default Temoignage;