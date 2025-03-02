import { JSX, useEffect, useState } from "react";
import Avatar from "./avatar";
import { Link } from "react-router-dom";

function CardFood(): JSX.Element {
  // usestate has avatar
  const [hasAvatar, setHasAvatar] = useState(false);

  const isProfilPage = location.pathname === "/Profil";
  useEffect(() => {
    setTimeout(() => {
      setHasAvatar(true);
    }, 3000);
  }, []);

  return (
    <>
      <div className="card m-0 relative">
        <figure>
          <img
            src="https://cdn.flyonui.com/fy-assets/components/card/image-9.png"
            alt="Watch"
          />
        </figure>
        {isProfilPage && (
          <div className="absolute top-2 right-2 grid grid-cols-2 gap-2">
            <button className="btn btn-circle btn-sm btn-primary">
              <span className="icon-[material-symbols--edit-outline]"></span>
            </button>
            <button className="btn btn-circle btn-sm btn-primary">
              <span className="icon-[material-symbols--delete-outline]"></span>
            </button>
          </div>
        )}

        <div className="card-body">
          <h5 className="card-title mb-2 text-base">Apple Smart Watch</h5>
          <div className="flex items-center justify-between text-sm">
            <Link className="flex items-center gap-2" to="/profil">
              <Avatar hasAvatar={hasAvatar} name="Nameno Rkt" size="size-6" />
              <span className="text-wp">Nameno Rkt</span>
            </Link>
            <div className="flex items-center gap-2">
              <p className="text-primary font-bold">4.5</p>
              <span className="text-primary/60 font-bold">★</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardFood;
