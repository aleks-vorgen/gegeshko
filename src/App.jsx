import {Header} from "./structure/header.jsx";
import {Navbar} from "./structure/navbar.jsx";
import {Footer} from "./structure/footer.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home.jsx";
import {About} from "./pages/about.jsx";

export default function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/about"} element={<About/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}