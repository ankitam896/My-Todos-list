import './App.css';
import Header from "./MyComponents/Header";
import { Home } from './MyComponents/Home';
import {About} from "./MyComponents/About";
import  {Footer} from "./MyComponents/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  
  
  return (
    <>
    <Router>
    <Header title="My Todos list" searchbar={false}/>
    < Routes>
    <Route exact path="/" element= {<Home/>}>
        </Route>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
