// Renderização de listas.

const Lists = ({ items }) => {
    return (
        <>
            <h2>Lista de Frameworks Front-End:</h2>
            {
                items.length > 0 ? items.map((item, index) => (
                    <p key={index}>{index}: {item}</p>
                )) : <p>Erro! Não há itens na lista.</p>
            }
        </>
    );
}
 
export default Lists;