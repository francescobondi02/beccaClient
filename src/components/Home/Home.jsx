import React, { useContext } from "react";
import { useEffect } from "react";
import { UserContext } from "../../userContext";
import axios from 'axios'
import { Container } from "@mui/system";
import { CssBaseline } from "@mui/material";
import Navbar from "./Navbar";
import { useState } from "react";
import Play from "./Play";
import HomeContent from "./HomeContent";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const { user, changeUser } = useContext(UserContext);
  const [myUser, setMyUser] = React.useState({});
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(page);
  }, [page])

  useEffect(() => {
    axios.get("/utenti/get").then(res => {
      if(res.status === 200){
        changeUser(res.data);
        //setMyUser(res.data);
      } else {
        navigate("/");
      }
    })
  }, [])

  function changePage(newPage) {
    setPage(newPage);
  }


  return <>
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      {/*page === 1 && <Play />*/}
      <Navbar page={page} setPage={changePage}/>
      <HomeContent />
    </Container>
  </>;
}
