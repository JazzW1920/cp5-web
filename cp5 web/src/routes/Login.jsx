// Marcio

import { useRef } from 'react';
import Pedidos from './Pedidos';
import './login.css';

function Login() {
  const user = useRef();
  const password = useRef();
  const getUser = sessionStorage.getItem('userData');
  const getSenha = sessionStorage.getItem('senhaData');

  const handleSubmit = () => {
    if (user.current.value === 'admin' && password.current.value === '12345') {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem('userData', 'admin');
      sessionStorage.setItem('senhaData', token);
    } else {
      alert('usuário e senha inválidos !!!');
    }
  };

  return (
    <main>
    <section className='login'>

      {getUser && getSenha ? (
        <Pedidos />
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <p>
            USUÁRIO:
            <input type="text" ref={user} />
          </p>
          <br />
          <p>
            SENHA:
            <input type="password" ref={password} />
          </p>
          <br />
          <input type="submit" value="Login" className='btn'/>
        </form>
      )}
    </section>
    </main>
  );
}

export default Login;
