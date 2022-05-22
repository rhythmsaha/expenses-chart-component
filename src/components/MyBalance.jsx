import React from "react";

const MyBalance = () => {
    return (
        <div className="w-full flex justify-between bg-soft-red px-6 py-5 rounded-xl">
            <div className="text-white">
                <h2 className="font-normal text-sm">My balance</h2>
                <p className="font-bold text-2xl">$921.48</p>
            </div>

            <img
                src="/images/logo.svg"
                alt=""
                className="object-contain w-14"
            />
        </div>
    );
};

export default MyBalance;
