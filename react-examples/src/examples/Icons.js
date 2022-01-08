// Icons

// Biblioteca para adição de diversos tipos de ícones numa aplicação React. É instalada com o comando: npm install reac-icons

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Icons = () => {
    return (
        <ul>
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedin /></li>
        </ul>
    );
}

export default Icons;