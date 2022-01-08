// Router.

// Pacote para mudança de URLs da aplicação.

// Instalação: npm install react-router-dom.

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/empresa">Empresa</Link>
            </li>
            <li>
                <Link to="/contato">Contato</Link>
            </li>
        </ul>
    );
}

export default Navbar;