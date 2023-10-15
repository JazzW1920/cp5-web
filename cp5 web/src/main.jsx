// Marcio

import {} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './routes/Error.jsx';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';
import Pedido from './routes/Pedidos.jsx';
import Inserir from './routes/Inserir.jsx';
import InserirPedido from './routes/InserirPedido.jsx';
import Editar from './routes/Editar.jsx';
import EditarPedido from './routes/EditarPedido.jsx';
import Excluir from './routes/Excluir.jsx';
import ExcluirPedido from './routes/ExcluirPedido.jsx';
import Sobre from './routes/Sobre.jsx';
import Login from './routes/Login.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login/> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/pedidos', element: <Pedido /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/cadastrar/produto', element: <Inserir /> },
      { path: '/cadastrar/pedido', element: <InserirPedido /> },
      { path: '/editar/produtos/:id', element: <Editar /> },
      { path: '/editar/pedidos/:id', element: <EditarPedido /> },
      { path: '/excluir/produtos/:id', element: <Excluir /> },
      { path: '/excluir/pedidos/:id', element: <ExcluirPedido /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
