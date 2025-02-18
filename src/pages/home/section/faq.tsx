import { JSX } from "react";
import FaqElement from "../../../Components/faqElement";

function Faq():JSX.Element {
    return ( <>
    <div className="max-w-[1000px] px-4 py-20 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="mb-4 text-3xl tracking-tight font-bold sm:text-4xl">
        Les questions les plus fréquentes</h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
            <FaqElement/>
            <FaqElement/>
            <FaqElement/>
            <FaqElement/>
            <FaqElement/>
            <FaqElement/>
          </div>
        </div>
      </div>
    </> );
}

export default Faq;