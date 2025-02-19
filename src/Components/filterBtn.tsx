import { JSX } from "react";

interface FilterBtnProps {
    toggleSidebar: () => void;
}

function FilterBtn({toggleSidebar}:FilterBtnProps):JSX.Element {
    return ( <>
        <button
              id="filter"
              type="button"
              onClick={toggleSidebar}
              className="dropdown-toggle btn btn-text btn-primary btn-square border border-primary"
            >
              <span className="icon-[material-symbols--filter-alt]"></span>
            </button>
    </> );
}

export default FilterBtn;