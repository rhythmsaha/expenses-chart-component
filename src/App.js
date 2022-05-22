import React from "react";
import Card from "./components/Card";
import Chart from "./components/Chart";
import MyBalance from "./components/MyBalance";
import Summary from "./components/Summary";

const Data = [
    {
        day: "mon",
        amount: 17.45,
    },
    {
        day: "tue",
        amount: 34.91,
    },
    {
        day: "wed",
        amount: 52.36,
    },
    {
        day: "thu",
        amount: 31.07,
    },
    {
        day: "fri",
        amount: 23.39,
    },
    {
        day: "sat",
        amount: 43.28,
    },
    {
        day: "sun",
        amount: 25.48,
    },
];

const App = () => {
    return (
        <main className="flex flex-col justify-center items-center gap-4 w-11/12 max-w-lg mx-auto min-h-screen ">
            <MyBalance />
            <Card>
                <Chart data={Data} />
                <Summary />
            </Card>
        </main>
    );
};

export default App;
