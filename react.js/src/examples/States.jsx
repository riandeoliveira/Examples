// useState.

// Hook que possibilita manipular o estado de um componente de forma simples.

import { useState } from 'react';

const States = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>useState</h1>
            <p>Valor de count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1 count</button>
        </>
    );
}

export default States;