// PropTypes.

// Biblioteca qie dá a possibilidade de tipar as props.

import PropTypes from 'prop-types';

const Types = ({ brand, releaseYear }) => {
    return (
        <>
            <li>{brand} - {releaseYear}</li>
        </>
    );
}

// Define os tipos das props e as torna obrigatórias.
Types.propTypes = {
    brand: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired
}

// Define os valores padrões das props, caso elas não contenham nenhum. Isso dispensa o isRequired de PropTypes acima.
Types.defaultProps = {
    brand: 'Sem marca registrada',
    releaseYear: 0
}

export default Types;