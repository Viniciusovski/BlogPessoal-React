import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ListaTema.css';
import Tema from '../../../models/Tema';
import { useHistory } from 'react-router-dom'
import { busca } from '../../../services/Service';
import { Button, Card, CardActions, CardContent, Typography, Box } from '@material-ui/core';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])  
  let history = useHistory();
    /*
   Hook useSelector: vai acessar o store, pegar o token
   e atribuir na const token
   a const token que vai ser verificada no useEffect
   */
  const token = useSelector<TokenState, TokenState["tokens"]>(
   (state) => state.tokens
  ); 

  useEffect(()=>{
    if(token == ''){
      alert("Você precisa estar logado")
      history.push("/login")
    }
  }, [token])


  async function getTema(){
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(()=>{
    getTema()
  }, [temas.length])

  return (
    <>
    {
      temas.map(tema =>(
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
             {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
  );
}


export default ListaTema;