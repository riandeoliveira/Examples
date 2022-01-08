// StateLift

const StateLift = ({ setName }) => {
    return (
        <>
            <label htmlFor="Nome"></label>
            <br />
            <input type="text" placeholder="Digite seu nome" onChange={e => setName(e.target.value)} />
        </>
    );
}

export default StateLift;