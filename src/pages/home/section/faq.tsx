import { JSX } from "react";
import FaqElement from "../../../Components/faqElement";

function Faq():JSX.Element {
    return (
      <>
        <div className="max-w-[1200px] mx-4  px-4 py-20 md:mx-auto bg-base-100 rounded-lg shadow-sm">
          <div className="flex items-start md:items-center md:justify-between  p-5 max-w-5xl mx-auto flex-col md:flex-row">
            <div className="max-w-2xl text-center ">
              <h6 className="text-start">FAQ</h6>
              <h2 className="mb-4 text-3xl tracking-tight font-bold sm:text-4xl text-start">
                Questions & <br />
                <span className="opacity-55">Reponses</span>
              </h2>
            </div>
            <div className="max-w-sm text-start ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias modi maxime animi ipsum delectus nobis quod autem
                blanditiis architecto laboriosam! Ipsam iusto ullam voluptatibus
                quisquam rem voluptatum placeat molestiae culpa!
              </p>
            </div>
          </div>
          <div className="max-w-5xl mx-auto">
            {/* accordion */}
            <div className="accordion divide-neutral/20 divide-y">
              {[
                "When is payment taken for my order?",
                "How do I change my order?",
                "How do I return an item?",
              ].map((item, index) => (
                <FaqElement id={`faq-${index}`} key={index} />
              ))}
            </div>
            {/* accordion */}
          </div>
        </div>
      </>
    );
}

export default Faq;