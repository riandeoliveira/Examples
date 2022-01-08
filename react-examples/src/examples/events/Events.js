// Events.

// Eventos, semelhantes ao do HTML padrão, que ao serem acionados executam algo.

const Events = ({ btn }) => {
    const myEvent = () => alert(`O botão ${btn} foi clicado!`);

    return (
        <>
            <p>Clique no botão {btn} abaixo para disparar um evento.</p>
            <button onClick={myEvent}>Clique aqui</button>
        </>
    );
}

export default Events;