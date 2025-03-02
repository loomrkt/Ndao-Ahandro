import { JSX } from "react";
import { Link } from "react-router-dom";

function DropProfil():JSX.Element {
    return (
      <>
        <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
          <button
            id="dropdown-scrollable"
            type="button"
            className="dropdown-toggle flex items-center"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <div className="avatar">
              <div className="size-9.5 rounded-full">
                <img
                  src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                  alt="avatar 1"
                />
              </div>
            </div>
          </button>
          <ul
            className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-avatar"
          >
            <li className="dropdown-header gap-2">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                    alt="avatar"
                  />
                </div>
              </div>
              <div>
                <h6 className="text-base-content text-base font-semibold">
                  John Doe
                </h6>
                <small className="text-base-content/50">Admin</small>
              </div>
            </li>
            <li>
              <Link className="dropdown-item" to="/profil">
                <span className="icon-[tabler--user]"></span>
                My Profil
              </Link>
            </li>
            <li className="dropdown-footer gap-2">
              <a className="btn btn-error btn-soft btn-block" href="#">
                <span className="icon-[tabler--logout]"></span>
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </>
    );
}

export default DropProfil;