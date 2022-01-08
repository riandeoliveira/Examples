// Importações de arquivos com códigos que serão usados neste componente.
import './App.css';
import Components from './examples/Components';
import Props from './examples/props/Props';
import Example from './examples/modules/Example';
import Fragments from './examples/Fragments';
import Types from './examples/props/Types';
import Events from './examples/events/Events';
import States from './examples/States';
import EventProps from './examples/events/eventsProps/EventProps';

const App = () => {
  const welcome = 'Olá, Mundo!';
  const phrase = 'Estou aprendendo React.';

  {/* Renderização dos componentes. */ }
  return (
    <div className="App">
      <header>
        {/* JS dentro do HTML (JSX). */}
        <h1>{welcome}</h1>
        <p>{phrase}</p>

      </header>
      <main>
        {/* Exemplo de Componentes. */}
        <Components />

        {/* Exemplos de Props. */}
        <Props fullName='Jonas Roberto' age='17' sex='M' />
        <Props fullName='Paulo Silva' age='24' sex='M' />
        <Props fullName='Angélica Gonçalvez' age='19' sex='F' />

        {/* Exemplos de Módulos CSS. */}
        <Example />

        {/* Exemplo de Fragmentos. */}
        <Fragments />

        {/* Exemplos de PropTypes. */}
        <Types brand='Ferrari' releaseYear={1985} />
        <Types brand='Fiat' releaseYear={1964} />
        <Types brand='Renault' />

        {/* Exemplo de Eventos. */}
        <Events btn={1} />
        <Events btn={2} />

        {/* Exemplos de Estados. */}
        <States />

        {/* Exemplos de Eventos em Props. */}
        <EventProps />
      </main>
    </div>
  );
}

export default App;