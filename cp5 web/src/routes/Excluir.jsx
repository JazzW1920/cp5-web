import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';


function Excluir() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recProdutoListaById = ListaProdutos.filter((item) => item.id == id);
  const [produto] = useState({
    id: recProdutoListaById[0].id,
    nome: recProdutoListaById[0].nome,
    desc: recProdutoListaById[0].desc,
    valor: recProdutoListaById[0].valor,
  });
  const handleExclude = (event) => {
    event.preventDefault();
    let indice;
    ListaProdutos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    ListaProdutos.splice(indice, 1);
    navigate('/produtos');
  };

  return (
    <section>
      <h1>Excluir Produto</h1>
      <div>
        <p>Nome : {produto.nome}</p>
        <p>Desc : {produto.desc}</p>
        <p>valor : {produto.valor}</p>
      </div>
      <div>
        <button onClick={handleExclude} >
          EXCLUIR
        </button>
        <button onClick={() => navigate('/produtos')}>
          CANCELAR
        </button>
      </div>
    </section>
  );
}
export default Excluir;
