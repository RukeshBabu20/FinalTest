import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Update from "./components/Update";
import Cart from "./components/Cart";
import AddProduct from "./components/AddProduct";
import AddCart from "./components/AddCart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Create />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/add" element={<AddProduct />}></Route>
          <Route path="/addCart/:id" element={<AddCart />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
