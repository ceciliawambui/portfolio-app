import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
function App() {
  return (
   <div>
     <Header/>
     <Home/>
     <Projects/>
     <Skills/>
     <Contact/>
     <Footer/>
   </div>
  );
}

export default App;
