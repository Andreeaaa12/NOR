import './App.css';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import About from './Components/About';
import Team from './Components/Team';
import Structure from './Components/Structure';
import PCB from './Components/PCB';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Team/>
      <PCB/>
      <Structure/>
      <Footer/>
    </div>
  );
}

export default App;
