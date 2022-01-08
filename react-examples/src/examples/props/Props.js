// Props.

// Informações que podem ser passadas para um componente para torná-lo mais dinâmico.

const Props = ({ fullName, age, sex }) => {
    return (
        <>
            <h2>Nome: {fullName}</h2>
            <p>Idade: {age}</p>
            <p>Sexo: {sex}</p>
            <hr/>
        </>
    );
}

export default Props;