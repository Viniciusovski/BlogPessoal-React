import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid } from "@material-ui/core";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';
import useLocalStorage from "react-use-localstorage";

function Navbar() {
  const [token, setToken] = useLocalStorage('token');
  let history = useHistory();

  function goLogout(){
    setToken('')
    alert('Usuário deslogado')
    history.push('login')
  }
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className="toolbar">
          <Box className="boxTopo" display="flex">
            <Grid
              container
              spacing={8}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={6}>
                <Box className="cursor">
                  <Typography variant="h5" className="cor-font-typography">
                    BlogPessoal
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                  className="margin-left"
                >
                  <Link to="/home" className="text-decorator-none">
                  <Box mx={1} className="cursor hover">
                    <Typography variant="h6" className="cor-font-typography">
                      HOME
                    </Typography>
                  </Box>
                  </Link>

                  <Link to="/posts" className="text-decorator-none">
                  <Box mx={1} className="cursor hover">
                    <Typography variant="h6" className="cor-font-typography">
                      POSTAGENS
                    </Typography>
                  </Box>
                  </Link>

                  <Link to="/temas" className="text-decorator-none">
                  <Box mx={1} className="cursor hover">
                    <Typography variant="h6" className="cor-font-typography">
                      TEMAS
                    </Typography>
                  </Box>
                  </Link>

                  <Link to="/formularioTema" className="text-decorator-none">
                  <Box mx={1} className="cursor hover">
                    <Typography
                      variant="h6"
                      className="cor-font-typography"
                      noWrap
                    >
                      CADASTRAR TEMA
                    </Typography>
                  </Box>
                  </Link>
                  
                    <Box mx={1} className="hover" onClick={goLogout}>
                      <Typography variant="h6" className="cor-font-typography">
                        LOGOUT
                      </Typography>
                    </Box>
                  

                </Box>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
