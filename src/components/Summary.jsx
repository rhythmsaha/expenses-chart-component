import React from "react";

const Summary = () => {
    return (
        <div className="pt-5 flex justify-between items-end">
            <div className="space-y-1 lg:space-y-2">
                <h3 className="text-base text-gray-500">Total this month</h3>
                <p className="font-bold text-3xl lg:text-5xl">$478.33</p>
            </div>

            <div className="text-right">
                <p className="font-bold text-lg">+2.4%</p>
                <h3 className="text-gray-500 lg:text-lg">from last month</h3>
            </div>
        </div>
    );
};

export default Summary;
