import "../src/assets/css/style.css";
import About from "./componets/About";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Portfolio from "./componets/Portfolio";
import SpotLight from "./componets/SpotLight";

function App() {
  return (
    <div>
      <Header />
      <SpotLight />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
