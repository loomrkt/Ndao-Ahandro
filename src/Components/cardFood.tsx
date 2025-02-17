import { JSX, useEffect, useState } from "react";
import Avatar from "./avatar";

function CardFood(): JSX.Element {
  // usestate has avatar
  const [hasAvatar, setHasAvatar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasAvatar(true);
    }, 3000);
  }, []);

  return (
    <>
      <div className="card m-0">
        <figure>
          <img
            src="https://cdn.flyonui.com/fy-assets/components/card/image-9.png"
            alt="Watch"
          />
        </figure>
        <div className="card-body">
          <h5 className="card-title mb-2 text-base">Apple Smart Watch</h5>
          <div className="flex items-center justify-between text-sm">
            <a className="flex items-center gap-2" href="#">
              <Avatar hasAvatar={hasAvatar} name="Nameno Rkt" size="size-6" />
              <span className="text-wp">Nameno Rkt</span>
            </a>
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
