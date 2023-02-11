import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
import { ProductContext } from "./context/ProductContext";
// Bileşenler
import { CartContext } from "./context/CartContext";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
    // verilen itemi sepete ekleyin
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{products,addItem}}>
        <CartContext.Provider value={{cart}}/>
        
        <Navigation cart={cart} />

        {/* Routelar */}
        <main className="content">
          <Route exact path="/">
            <Products  />
          </Route>

          <Route path="/cart">
            <ShoppingCart cart={cart} />
          </Route>
        </main>
        <CartContext.Provider />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
