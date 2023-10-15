// Julia e Jessica

import {} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.components.css'

function Nav() {
  const navigate = useNavigate();

  const handleLogout = async ()=>{
    sessionStorage.removeItem('useData');
    sessionStorage.removeItem('senhaData');
    alert("saindo da sessão");
    navigate('/');
  }

  return (
    <>
      <header>
        <h2 className='nome'>Restaurante Wasabi Way</h2>
        <nav>
          <ul className='nav'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="Produtos">Produtos</Link>
            </li>
            <li>
              <Link to="Sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <button onClick={handleLogout} >Logout</button>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;
