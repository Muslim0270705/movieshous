
import {Routes, Route} from 'react-router-dom'
import Layout from "./Layout/Layout";
import "./styles/style.scss"
import Home from "./pages/Home/Home";
import Films from "./pages/Films/Films";
import AboutUs from "./pages/AboutUs/AboutUs";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Questions from "./pages/ Questions/Questions";
import Trems from "./pages/ Terms/Trems";
import Confidentiality from "./pages/Confidentiality/Confidentiality";
import Vacancies from "./pages/Vacancies/Vacancies";
import Input from "./pages/Input/Input";
import Register from "./pages/Register/Register";
import Create from "./pages/Register/Create/Create";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loginAccount} from "./redux/reducers/users";
import Film from "./pages/Film";
import Favorites from "./pages/Favorites/Favorites.";
import Favorite from "./pages/Favorites/Favorite";
import Ratings from "./pages/Favorites/Ratings";
import Subscription from "./pages/Favorites/Subscription";
import LayoutFavorites from "./pages/Favorites/LayoutFavorites";
import AdminPanel from "./AdminPanel/AdminPanel";

function App() {
    const dispatch = useDispatch()
    const userName =localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")) : ''
    useEffect(() => {
        if(localStorage.getItem("user") !== null){
            dispatch(loginAccount(JSON.parse(localStorage.getItem("user"))))
        }
    },[])
  return (
    <div className="App">
        <Routes>
          <Route path={"/"} element={<Layout/>}>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/trems"} element={<Trems/>}/>
              <Route path={"/vacancies"} element={<Vacancies/>}/>
              <Route path={"/confidentiality"} element={<Confidentiality/>}/>
              <Route path={"/questions"} element={<Questions/>}/>
              <Route path={"/contact"} element={<Contact/>}/>
              <Route path={"/about"} element={<About/>}/>
              <Route path={"/about-us"} element={<AboutUs/>}/>
              <Route path={"/content"} element={<Films/>}/>
              <Route path={"/film/:id"} element={<Film/>}/>
          </Route>
            <Route path={"/input"} element={<Input/>}/>
            <Route path={"/register"} element={<Register/>}/>
            <Route path={"/create"} element={<Create/>}/>
            {userName.email === 'magezamuslim40@gmail.com' ? <Route path={'/*'} element={<AdminPanel/>}/> : ''}
            <Route path={"/favorites/"} element={<LayoutFavorites/>}>
                <Route path={"/favorites/"} element={<Favorite/>}/>
                <Route path={"/favorites/ratings"} element={<Ratings/>}/>
                <Route path={"/favorites/subscription"} element={<Subscription/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
