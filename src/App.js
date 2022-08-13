import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';

import Checkout from './Components/Checkout/Checkout/Checkout';
import SearchPage from './Components/SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<SearchPage></SearchPage>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
    </div>
  );
}

export default App;
