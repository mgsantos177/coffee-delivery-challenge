import { Route, Routes } from 'react-router-dom';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>page</h1>} />
      <Route path="/carrinho" element={<h1>carrinho</h1>} />
      <Route path="/pedido-realizado" element={<h1>pedido realizado</h1>} />
    </Routes>
  );
}
