import { JSX } from "react";

interface FaqElementProps {
  id: string;
}

function FaqElement({ id }: FaqElementProps): JSX.Element {
  return (
    <>
      <div className="accordion-item" id={`${id}`}>
        <button
          className="accordion-toggle inline-flex items-center justify-between text-start"
          aria-controls={`${id}-collapse`}
          aria-expanded="false"
        >
          How would you ship my order?
          <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
        </button>
        <div
          id={`${id}-collapse`}
          className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby={`${id}`}
          role="region"
        >
          <div className="px-5 pb-4">
            <p className="text-base-content/80 font-normal">
              For large products, we deliver your product via a third party
              logistics company offering you the “room of choice” scheduled
              delivery service. For small products, we offer free parcel
              delivery.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqElement;