import { JSX } from "react";

function FaqElement():JSX.Element {
    return ( <>
        <div>
            <h3 className="text-lg font-semibold ">
            Can I cancel at anytime?
            </h3>
            <p className="mt-2 text-wp">
            Yes, you can cancel anytime no questions are asked while you
            cancel but we would highly appreciate if you will give us some
            feedback.
            </p>
        </div>
    </> );
}

export default FaqElement;