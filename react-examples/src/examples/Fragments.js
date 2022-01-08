// Fragments.

// Permite a criação de componentes sem o elemento pai. Ao invés de retornar uma <div></div> seria retornado um <></>.

const Fragments = () => {
    return (
        <>
            <h2>Fragment</h2>
            <p>Este exemplo não possui um elemento pai (tag div).</p>
        </>
    );
}
 
export default Fragments;