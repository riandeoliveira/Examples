//  O Bootstrap possui uma versão destinada para o uso com React. Ela pode ser instalada e importada através dos comandos:

// npm install --save react-bootstrap

// No index.js, antes dos imports CSS:
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Form, Button } from 'react-bootstrap';
import style from './ReactBootstrap.module.css';

const ReactBootstrap = () => {
    return (
        <>
            <h2>Bootstrap no React</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control className={style.abc} type="email" placeholder="Digite seu e-mail" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control className={style.abc} type="password" placeholder="Digite sua senha" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Clique em mim" />
                </Form.Group>
                <Button variant="primary" type="submit">Enviar</Button>
            </Form>
        </>
    );
}

export default ReactBootstrap;