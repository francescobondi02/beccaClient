import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function makeRoom(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }

export default function HomeContent() {

    const navigate = useNavigate();
    function createRoom(){
        navigate("/game/" + makeRoom(10));
    }
  return (
    <>
    <Container maxWidth="md">
        <Paper elevation={3}>
            
            <Grid container spacing={2} sx={{margin:"auto", marginTop:"100px"}}  alignItems="center" justifyContent="center" p={5}>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h2" gutterBottom textAlign="center">Nuova partita di BECCACCINO</Typography>
                </Grid>
                <Grid item xs={6}>
                <Typography variant="subtitle1" gutterBottom>Entra inserendo il codice della stanza</Typography>
                </Grid>
                <Grid item xs={4}>
                 <TextField variant='standard' id="room-join" label="Codice stanza"/>
                </Grid>

                <Grid item xs={6}>
                <Typography variant="subtitle1" gutterBottom>Oppure crea una stanza per i tuoi amici</Typography>
                </Grid>
                <Grid item xs={4}>
                 <Button variant="contained" color="primary" onClick={createRoom}>Crea stanza casuale</Button>
                </Grid>
                
            </Grid>
        </Paper>
    </Container>
        
    </>
  )
}
