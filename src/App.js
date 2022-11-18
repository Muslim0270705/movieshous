
import {Routes, Route} from 'react-router-dom'
import Layout from "./Layout/Layout";
import "./styles/style.scss"
import Home from "./pages/Home/Home";
import Films from "./pages/Films/Films";
import AboutUs from "./pages/AboutUs/AboutUs";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Questions from "./pages/ Questions/Questions";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={"/"} element={<Layout/>}>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/questions"} element={<Questions/>}/>
              <Route path={"/contact"} element={<Contact/>}/>
              <Route path={"/about"} element={<About/>}/>
              <Route path={"/about-us"} element={<AboutUs/>}/>
              <Route path={"/"} element={<Films/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
