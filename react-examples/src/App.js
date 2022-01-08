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
import Conditionals from './examples/Conditionals';
import Lists from './examples/Lists';
import Name from './examples/stateLift/Name';
import StateLift from './examples/stateLift/StateLift';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './examples/router/pages/Home';
import Company from './examples/router/pages/Company';
import Contact from './examples/router/pages/Contact';
import Navbar from './examples/router/Navbar';
import Icons from './examples/Icons';

const App = () => {

  const welcome = 'Olá, Mundo!';
  const phrase = 'Estou aprendendo React.';

  const frameworks = ['React', 'Angular', 'Vue'];

  const [name, setName] = useState();

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

        {/* Exemplo de Módulos CSS. */}
        <Example />

        {/* Exemplo de Fragmentos. */}
        <Fragments />

        {/* Exemplos de PropTypes. */}
        <Types brand='Ferrari' releaseYear={1985} />
        <Types brand='Fiat' releaseYear={1964} />
        <Types brand='Renault' />

        {/* Exemplos de Eventos. */}
        <Events btn={1} />
        <Events btn={2} />

        {/* Exemplo de Estados. */}
        <States />

        {/* Exemplo de Eventos em Props. */}
        <EventProps />

        {/* Exemplo de Renderização Condicional. */}
        <Conditionals />

        {/* Exemplos de Renderização de Listas. */}
        <Lists items={frameworks} />
        <Lists items={[]} />

        {/* Exemplos de State Lift. */}
        <Name name={name} />
        <StateLift setName={setName} />

        {/* Exemplos de Router. */}
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/empresa" element={<Company />}></Route>
            <Route path="/contato" element={<Contact />}></Route>
          </Routes>
        </Router>

        {/* Exemplos de Icons. */}
        <Icons />
      </main>
    </div>
  );
}

export default App;