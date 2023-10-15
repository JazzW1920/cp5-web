// Marcio

import {} from 'react';
import { Link } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';
import './produtos.css'

function Produtos() {
  return (
    <main>
    <section className='produtos'>
      <h1>LISTA DE PRODUTOS</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>PREÇO</th>
              <th>EDITAR / EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {ListaProdutos.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>{item.valor}</td>
                <td>
                  {' '}
                  <Link to={`/editar/produtos/${item.id}`}>
                    <Editar />
                  </Link>{' '}
                  |
                  <Link to={`/excluir/produtos/${item.id}`}>
                    <Excluir />
                  </Link>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div>
        <Link to={`/cadastrar/produto/`} className='botao'>
          (+) Cadastrar Produto
        </Link>
      </div>
    </section>
    </main>
  );
}
export default Produtos;
