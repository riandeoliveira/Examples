// Renderização Condicional.

import { useState } from 'react';

const Conditionals = () => {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    const sendEmail = e => {
        e.preventDefault();
        setUserEmail(email);
    }

    const cleanEmail = () => setUserEmail('');

    return (
        <>
            <br />
            <br />
            <label htmlFor='email'>E-mail</label>
            <br />
            <form>
                <input type='email' placeholder='Digite seu e-mail' required onChange={e => setEmail(e.target.value)} />
                <input type='submit' value='Enviar' onClick={sendEmail} />
            </form>
            
            {
                userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={cleanEmail}>Limpar e-mail</button>
                    </div>
                )
            }
        </>
    );
}

export default Conditionals;