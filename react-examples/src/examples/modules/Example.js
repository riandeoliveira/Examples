// CSS Modules.

// Forma de usar o CSS, tornando cada class única, gerando um hash no nome dela.

import style from './Example.module.css';

const Example = () => {
    return (
        <>
            <h2 className={style.red}>Módulos CSS</h2>
            <p className={style.blue}>Este é um exemplo de módulos em CSS.</p>
        </>
    );
}


export default Example;