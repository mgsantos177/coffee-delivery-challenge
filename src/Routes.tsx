import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<h1>carrinho</h1>} />
        <Route path="/pedido-realizado" element={<h1>pedido realizado</h1>} />
      </Route>
    </Routes>
  );
}
