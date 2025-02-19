import { JSX } from "react";
import { useSidebar } from "../contexts/SidebarContext";

function FilterBtn(): JSX.Element {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <button
        id="filter"
        type="button"
        onClick={toggleSidebar}
        className="dropdown-toggle btn btn-text btn-primary btn-square border border-primary"
      >
        <span className="icon-[material-symbols--filter-alt]"></span>
      </button>
    </>
  );
}

export default FilterBtn;