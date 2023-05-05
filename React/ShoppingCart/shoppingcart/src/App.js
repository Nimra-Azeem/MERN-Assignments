import './App.css';
import Header from './header.js';
import Carousal from './carousal.js';
import Footer from './footer.js'
import Cards from './cards';
import Cart from './addToCart';

function App() {
  return (
    <div>
    <Header />
    <Carousal/>
    <Cards/>
    <Footer />
    </div>
  );
}

export default App;
