import { useState } from 'react';
import { ListaPedidos } from '../components/ListaPedidos';
import { useNavigate } from 'react-router-dom';
import './inserirPedidos.css'


function InserirPedido() {
    const navigate = useNavigate();

    let novoId = ListaPedidos[ListaPedidos.length - 1].id + 1;

    const [pedido, setPedido] = useState({
        id: novoId,
        nome: '',
        desc: '',
        valor: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        ListaPedidos.push(pedido);
        navigate('/pedidos');
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setPedido({ ...pedido, [name]: value });
    };

    return (
        <section className='inserir-pedidos'>
            <h1>Cadastro de Pedido</h1>
            <form className='cadastro' onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Pedido</legend>
                    <p>
                        <label htmlFor="idNome"> Pedido:</label>
                        <input
                            type="text"
                            name="nome"
                            id="idNome"

                            value={pedido.nome}
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <label htmlFor="idDesc">Descrição Pedido:</label>
                        <input
                            type="text"
                            name="desc"
                            id="idDesc"

                            value={pedido.desc}
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <label htmlFor="idValor"> Valor do Pedido:</label>
                        <input
                            type="text"
                            name="valor"
                            id="idValor"

                            value={pedido.valor}
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <button type="submit">
                            CADASTRAR
                        </button>
                    </p>
                </fieldset>
            </form>
        </section>
    );
}
export default InserirPedido;
