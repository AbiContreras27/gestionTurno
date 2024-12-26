import MisTurnos from "./views/MisTurnos/MisTurnos";
import Home from "./views/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Style from './App.module.css';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import NotFound from "../src/views/NotFound/NotFound";
import { UsersContext } from "./context/UsersContext";
import AgendarTurno from "./components/AgendarTurno/AgendarTurno";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isNotFound, setIsNotFound] = useState(false); 
  const { user } = useContext(UsersContext);

  useEffect(() => {
    if (!user && location.pathname !== "/login" && location.pathname !== "/register") {
      navigate("/login");
    } else if (user && (location.pathname === "/login" || location.pathname === "/register")) {
      navigate("/");
    }
  }, [location.pathname, user, navigate]);

  return (
    <>
      {
        !user ? (
          <main className={Style.main}>
            <Navbar />
            <h1>Consultorio de Psicología</h1>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        ) : (
          <>
            { !isNotFound && (
              <header>
                <Navbar />
              </header>
            )}
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/misturnos" element={<MisTurnos />} />
                <Route path="/agendarturno" element={<AgendarTurno />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
          </>
        )
      }
    </>
  );
}

export default App;
