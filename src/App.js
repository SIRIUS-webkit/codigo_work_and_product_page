import HeroSection from "./Workcomponent/HeroSection";
import GallarySection from "./Workcomponent/GallarySection";
import Footer from "./Workcomponent/Footer";
import "./workcss/style.css";
import "./workcss/responsive.css";
import "./workcss/navbar.css";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <GallarySection />
      <Footer />
    </div>
  );
}

export default App;
