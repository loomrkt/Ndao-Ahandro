import { JSX } from "react";

interface Button2Props {
    text: string;
}

function button2(props:Button2Props): JSX.Element {
    return ( 
        <>
            <button className="btn btn-outline btn-primary">{props.text}</button>
        </>
     );
}

export default button2;