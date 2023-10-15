// Marcio

import { } from 'react';
import { Link } from 'react-router-dom';
import { ListaPedidos } from '../components/ListaPedidos';
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';
import './pedidos.css'

function Pedidos() {
    return (
        <section className='pedidos'>
            <h1>LISTA DE PEDIDOS</h1>
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
                        {ListaPedidos.map((item, indice) => (
                            <tr key={indice}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.desc}</td>
                                <td>{item.valor}</td>
                                <td>
                                    {' '}
                                    <Link to={`/editar/pedidos/${item.id}`}>
                                        <Editar />
                                    </Link>{' '}
                                    |
                                    <Link to={`/excluir/pedidos/${item.id}`}>
                                        <Excluir />
                                    </Link>{' '}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <Link to={`/cadastrar/pedido/`} className='botao'>
                    (+) Cadastrar Pedido
                </Link>
            </div>
        </section>
    );
}
export default Pedidos;
