import { JSX } from "react";
import FileDrop from "./fileDrop/fileDrop";

function DataForm():JSX.Element {
    return ( <>
        <div className="max-w-[1200px] mx-4  px-4 py-20 md:mx-auto bg-base-100 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
            <div>
            <h1 className="text-3xl font-semibold mb-5">Ajouter une recette</h1>
                <div>
                    <label className="label label-text" htmlFor="nom"> Nom du recette </label>
                    <input type="text" id="nom" placeholder="ex: Pizza Napolitaine " className="input max-w-sm bg-base-200 text-sm border-b border-gray-300 focus:border-primary pl-2 pr-8 py-3 outline-none" />
                </div>
                <div className="sm:w-96">
                    <label className="label label-text" htmlFor="description"> Description du recette </label>
                    <textarea className="textarea bg-base-200 text-sm border-b border-gray-300 focus:border-primary pl-2 pr-8 py-3 outline-none" placeholder="Entrer la description ici ..." id="description"></textarea>
                </div>
            </div>
            <div>
                <FileDrop/>
            </div>
        </div>
    </> );
}

export default DataForm;