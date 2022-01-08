import Event from './Event';

const EventProps = () => {
    const myEvent = () => alert('Ativando primeiro evento');

    return (
        <>
            <p>Clique para disparar um evento.</p>
            <Event event={myEvent} text='Primeiro evento' />
        </>
    );
}
 
export default EventProps;