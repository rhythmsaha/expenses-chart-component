import React from "react";

const Card = (props) => {
    return (
        <div className="w-full bg-white shadow-lg rounded-xl px-6 lg:px-8 lg:py-8 py-5">
            {props.children}
        </div>
    );
};

export default Card;
