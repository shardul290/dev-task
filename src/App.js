import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Programs from './components/Programs';
import FAQ from './components/FAQ';
import PreFooter from './components/PreFooter'; 
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Advantages />
      <Programs />
      <FAQ />
      <PreFooter /> 
      <Footer />
    </div>
  );
}

export default App;
