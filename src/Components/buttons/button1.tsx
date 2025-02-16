// add props to the function to pass the props to the component

import { JSX } from "react";


interface Button1Props {
    text: string;
}

// add the props to the function


function button1(props: Button1Props): JSX.Element {
    return ( <>
            <button className="btn btn-primary">{props.text}</button>
    </> );
}

export default button1;