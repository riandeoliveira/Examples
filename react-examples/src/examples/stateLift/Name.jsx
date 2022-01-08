const Name = ({ name }) => {

    const generateGreeting = name => `Olá ${name}, tudo bem?`;

    return (
        <>
            {name && <p>{generateGreeting(name)}</p>}
        </>
    );
}

export default Name;