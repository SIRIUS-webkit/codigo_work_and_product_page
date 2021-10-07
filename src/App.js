import Productnav from "./Productcomponent/product_nav";
import Product from "./Productcomponent/product";
import "./productcss/product-nav.css";
import "./productcss/product.css";
import "./productcss/productresponsive.css";
import Footer from "./Workcomponent/Footer";

function App() {
  return (
    <div className="App">
      <Productnav />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
