import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Checkout } from './pages/Checkout';
import { SuccessPage } from './pages/Success';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Checkout />} />
        <Route path="/sucesso" element={<SuccessPage />} />
      </Route>
    </Routes>
  );
}
