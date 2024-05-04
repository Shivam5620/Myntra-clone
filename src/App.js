import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import UserDetails from "./components/UserDdetails";

function App() {
   return (
    <div>
      <Header />
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
