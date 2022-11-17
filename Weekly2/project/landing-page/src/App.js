import './App.css';
import AboutUs from './component/AboutUs';
import Footer from './component/Footer';
import Home from './component/Home';
import Navigation from './component/Navigation';
import ContactContainers from './containers/ContactContainers';

function App() {
  return (
    <>
      <div className="bg-home">
        <Navigation />
        <Home />
      </div>
      <ContactContainers />
      <AboutUs />
      <Footer />
    </>

  );
}

export default App;
