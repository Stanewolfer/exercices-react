import React, { useState, useEffect } from 'react';

const Compteur = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count === 5) {
            alert('Le compteur a atteint 5 !');
        }
        if (count === 10) {
            alert('Le compteur a atteint 10 !');
        }
    }, [count]);

    return (
        <div className='container'>
            <h1>Compteur: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
};

export default Compteur;
