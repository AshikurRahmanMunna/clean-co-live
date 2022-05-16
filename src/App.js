import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Services from './pages/Services';

function App() {
  return (
    <div>
      <Navbar>
        <Home></Home>
        <About></About>
        <Contact></Contact>
        <Services></Services>
        <Login></Login>
      </Navbar>
    </div>
  );
}

export default App;
