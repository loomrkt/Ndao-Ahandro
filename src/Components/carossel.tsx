import { JSX, ReactNode } from "react";

interface CarosselProps {
    children: ReactNode[];
}

function Carossel({children}:CarosselProps):JSX.Element {
    return (
      <>
        <div
          id="auto-play"
          data-carousel='{ "loadingClassNamees": "opacity-0", "isAutoPlay": true, "speed": 10000 }'
          className="relative w-full"
        >
          <div className="carousel h-80">
            <div className="carousel-body opacity-0 h-full">
              {children.map((child, index) => (
                <div className="carousel-slide" key={index}>
                  <div className=" flex h-full justify-center p-6 items-center">
                    {child}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button type="button" className="carousel-prev z-10">
            <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
              <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <button type="button" className="carousel-next z-10">
            <span className="sr-only">Next</span>
            <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
              <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
            </span>
          </button>
        </div>
      </>
    );
}

export default Carossel;