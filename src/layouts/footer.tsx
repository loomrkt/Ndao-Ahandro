import { JSX } from "react";

function Footer(): JSX.Element {
    return (
      <>
        <footer className="footer footer-center px-6 py-4">
          <aside>
            <p className="text-balance">
              Copyright © 2025 Ndao Ahandro par <br />
              <a
                href="https://nameno.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-primary"
              >
                Nameno Fanantenana RAKOTONDRAZAKA
              </a>
            </p>
          </aside>
        </footer>
      </>
    );
}

export default Footer;