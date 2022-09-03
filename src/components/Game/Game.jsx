import React from 'react'
import { useParams } from 'react-router-dom'
import  io from 'socket.io-client'
import { UserContext } from '../../userContext';
import { useContext, useEffect } from 'react';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//const socket = io.connect("http://localhost:3001");
const socket = io.connect("https://beccaonline.herokuapp.com");

export default function Game() {
  const navigate = useNavigate();
  const params = useParams();
  const room = params.room;
  const {user, changeUser} = useContext(UserContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.emit('joinRoom', room);
    socket.emit("clientsInRoom", room);

    axios.get("/utenti/get").then(res => {
      if(res.status === 200){
        changeUser(res.data);
        //setMyUser(res.data);
      } else {
        navigate("/");
      }
    })
  } , [])

  useEffect(() => {
    socket.on("clientsInRoom", (data)=>{
      console.log("UTENTI COLLEGATI ALLA TUA STANZA: ")
      console.log(data);
      setUsers(data);
    })
  }, [socket])

  return (
    <>
      <Container maxWidth="xl">
        <Typography component="h2" variant="h3" textAlign="center" gutterBottom>{"Stanza: " + room}</Typography>
        {users.map((user, index) => {
          return <Typography component="p" gutterBottom key={index}>{user}</Typography>
        })}
      </Container>
    </>
  )
}
