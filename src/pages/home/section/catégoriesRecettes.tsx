import CardCategorie from "../../../Components/cardCategorie";
import GridCenter from "../../../Components/GridCenter/gridCenter";

function CatégoriesRecettes() {
    return (
      <>
        <div className="p-6 py-20 w-full">
          <div className="text-center md:max-w-[600px] mx-auto">
            <h2 className="mb-4 text-3xl tracking-tight font-bold sm:text-4xl">
              Voici les catégories de recettes
            </h2>
            <p className="mt-4 dark:text-red-600 text-sm text-wp">
              Trouvez l’inspiration culinaire en explorant nos recettes variées!
              De quoi ravir tous les gourmands!
            </p>
          </div>
          <div className="flex justify-center items-center max-w-[1000px] mx-auto mt-10">
            <GridCenter>
              <CardCategorie />
              <CardCategorie />
              <CardCategorie />
            </GridCenter>
          </div>
        </div>
      </>
    );
}

export default CatégoriesRecettes;