import logo from './logo.svg';
import './modernNormalise.css';
import './App.css';
import './Components/Header.css' 
import './Components/Hero.css'
import './Components/About.css'
import './Components/Featured.css'
import './Components/Work.css'
import './Components/Contact.css'
import './Components/Footer.css'
import './Components/MobileMenu.css'
import './Util.css'
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Featured from './Components/Featured';
import Footer from './Components/Footer';
import ThemeProvider from './Components/ThemeProvider';
import { useTheme } from './Components/ThemeProvider';

function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Featured></Featured>
      <Footer></Footer>
    </div>
   
  );
}

export default App;
