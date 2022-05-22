import React, { useState } from "react";
import { motion } from "framer-motion";

function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
}

const Bar = ({ item }) => {
    const [showStats, setShowStats] = useState(false);

    return (
        <>
            <motion.div
                initial={{ height: 0 }}
                animate={{
                    height: `${percentage(item.amount, 60)}%`,
                }}
                transition={{ type: "just", duration: 0.5 }}
                className={`w-full ${
                    item.day === "wed" ? "bg-cyan" : "bg-soft-red"
                } rounded-md cursor-pointer relative hover:bg-opacity-80 transition`}
                onMouseEnter={() => setShowStats(true)}
                onMouseLeave={() => setShowStats(false)}
            >
                {showStats && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute  -top-10 py-1 px-2 rounded-md right-2/4 translate-x-2/4  bg-dark-brown text-white z-10"
                    >
                        ${item.amount}
                    </motion.div>
                )}
            </motion.div>
        </>
    );
};

export default Bar;
