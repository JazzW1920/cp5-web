import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaPedidos } from '../components/ListaPedidos';


function ExcluirPedido() {
    const { id } = useParams();
    const navigate = useNavigate();

    const recPedidoListaById = ListaPedidos.filter((item) => item.id == id);
    const [pedido] = useState({
        id: recPedidoListaById[0].id,
        nome: recPedidoListaById[0].nome,
        desc: recPedidoListaById[0].desc,
        valor: recPedidoListaById[0].valor,
    });
    const handleExclude = (event) => {
        event.preventDefault();
        let indice;
        ListaPedidos.forEach((item, index) => {
            if (item.id == pedido.id) {
                indice = index;
            }
        });
        ListaPedidos.splice(indice, 1);
        navigate('/pedidos');
    };

    return (
        <section>
            <h1>Excluir Pedido</h1>
            <div>
                <p>Nome : {pedido.nome}</p>
                <p>Desc : {pedido.desc}</p>
                <p>valor : {pedido.valor}</p>
            </div>
            <div>
                <button onClick={handleExclude} >
                    EXCLUIR
                </button>
                <button onClick={() => navigate('/pedidos')}>
                    CANCELAR
                </button>
            </div>
        </section>
    );
}
export default ExcluirPedido;
