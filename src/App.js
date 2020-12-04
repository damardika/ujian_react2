import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Isi from './component/Isi';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Footer/>
      <Header/>
      <Isi/>
    </Router>
  );
}

export default App;
