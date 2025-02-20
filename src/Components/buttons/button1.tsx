// add props to the function to pass the props to the component

import { JSX } from "react";
import { Link } from "react-router-dom";

interface Button1Props {
  text: string;
  path: string;
}

// add the props to the function

function button1(props: Button1Props): JSX.Element {
  return (
    <>
      <Link to={props.path} className="btn btn-primary">
        {props.text}
      </Link>
    </>
  );
}

export default button1;