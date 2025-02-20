import CardTemoignage from "../../../Components/cardTemoignage";
import Carossel from "../../../Components/carossel";

function Temoignage() {
    return (
      <>
        <div className=" py-20 max-w-[1200px] md:mx-auto bg-base-100 rounded-lg shadow-sm mx-4  px-4">
          <div className="text-center md:max-w-[600px] mx-auto">
            <h2 className="mb-4 text-3xl tracking-tight font-bold sm:text-4xl">
              Temoignage de nos utilisateurs
            </h2>
          </div>
          <div className="flex justify-center items-center max-w-[1000px] mx-auto mt-10">
            <Carossel>
              <CardTemoignage />
              <CardTemoignage />
              <CardTemoignage />
            </Carossel>
          </div>
        </div>
      </>
    );
}

export default Temoignage;