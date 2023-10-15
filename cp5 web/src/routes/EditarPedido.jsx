/* useParams -Ele serve para receber parâmetros pela rota. Quando vamos criar uma rota, é possível fazer que ela receba parâmetros */
import { useNavigate, useParams } from 'react-router-dom';
import { ListaPedidos } from '../components/ListaPedidos';
import { useState } from 'react';

function EditarPedido() {
    const { id } = useParams();
    const navigate = useNavigate();

    const recPedidoListaById = ListaPedidos.filter((item) => item.id == id);


    const [pedido, setPedido] = useState({
        id: recPedidoListaById[0].id,
        nome: recPedidoListaById[0].nome,
        desc: recPedidoListaById[0].desc,
        valor: recPedidoListaById[0].valor,
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        let indice;
        ListaPedidos.forEach((item, index) => {
            if (item.id == pedido.id) {
                indice = index;
            }
        });
        ListaPedidos.splice(indice, 1, pedido);
        navigate('/pedidos');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPedido({ ...pedido, [name]: value });
    };

    return (
        <section >
            <h1 >EDITAR PEDIDOS</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>PEDIDO SELECIONADO</legend>
                    <div>
                        <input
                            type="hidden"
                            name="id"
                            value={pedido.id}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="idNome">Nome do Produto:</label>
                        <input
                            type="text"
                            name="nome"
                            id="idNome"
                            value={pedido.nome}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="idDesc">Descrição do Produto:</label>
                        <input
                            type="text"
                            name="desc"
                            id="idDesc"
                            value={pedido.desc}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="idValor">Valor do Produto:</label>
                        <input
                            type="text"
                            name="valor"
                            id="idValor"
                            value={pedido.valor}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button type="subtmit" >EDITAR</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
}
export default EditarPedido;
