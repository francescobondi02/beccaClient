import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import { UserContext } from "./userContext";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Game from "./components/Game/Game";

function App() {
  const [user, setUser] = useState({});
  console.log(user);
  const changeUser = (newUser) => {
    setUser(newUser);
  };

  const theme = createTheme({
    //Custom theme
    typography: {
      fontFamily: "Readex Pro",
    },
    palette: {
      primary: {
        main: "#00bcd4",
      },
      custom: {
        main: "yellow",
        contrastText: "black",
      },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={{ user, changeUser }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/game/:room" element={<Game />} />
          </Routes>
        </UserContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
