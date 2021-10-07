import Productnav from "./Productcomponent/Productnav";
import Product from "./Productcomponent/Product";
import Footer from "./Workcomponent/Footer";
import "./productcss/product-nav.css";
import "./productcss/product.css";
import "./Productcomponent/Carousel.css";
import "./productcss/productresponsive.css";

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
