import React from "react";
import Bar from "./Bar";

const Chart = ({ data }) => {
    return (
        <div className="border-b pb-10">
            <h2 className="text-xl font-bold">Spending - Last 7 days</h2>

            <div className="pt-10 grid grid-cols-7 gap-2 sm:gap-3 md:gap-4 ">
                {data.map((item, index) => (
                    <div
                        className="space-y-1 flex flex-col  h-56 justify-end items-center"
                        key={index}
                    >
                        <Bar item={item} />
                        <p className="text-center text-xs text-gray-500">
                            {item.day}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chart;
