import React, { useState, useEffect } from "react";
import SecondsCounter from './SecondsCounter';

const Home = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);
        return () => clearInterval(interval); 
    }, []);

    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = Math.floor(counter / 1) % 10;

    return (
        <SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />
    );
};

export default Home;
