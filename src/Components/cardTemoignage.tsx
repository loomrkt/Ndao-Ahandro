import { JSX, useEffect, useState } from "react";
import Avatar from "./avatar";

function CardTemoignage():JSX.Element {
  const [hasAvatar, setHasAvatar] = useState(false);
  
    useEffect(() => {
      setTimeout(() => {
        setHasAvatar(true);
      }, 3000);
    }, []);

    return ( <>
    <blockquote className="relative max-w-[500px] mx-auto bg-base-100 rounded-lg shadow-lg p-8">
  <span className="icon-[tabler--quote] text-base-300/80 absolute -start-3 -top-3 size-16 rotate-180 rtl:rotate-0"></span>

  <div className="relative z-[1]">
    <p className="text-base-content text-lg">
      <em>
        The blockquote element is ideal for showcasing well-known quotes within content. It's commonly used for
        testimonials, reviews, and notable quotes in articles.
      </em>
    </p>
  </div>
  <footer className="mt-4 flex items-center">
    <a className="flex items-center gap-2" href="#">
      <Avatar hasAvatar={hasAvatar} name="Nameno Rkt" size="size-10" />
      <span className="text-wp">Nameno Rkt</span>
    </a>
  </footer>
</blockquote>
    </> );
}

export default CardTemoignage;