import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import "./Navbar.css";
import MenuComponent from "../Menu/MenuComponent";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className="toolbar">
          <Box className="boxTopo" display="flex">
            <Box className='cursor'>
              <Typography variant="h5" className="cor-font-typography">
                BlogPessoal
              </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
              <Box mx={1} className='cursor'>
                <Typography variant="h6" className="cor-font-typography">
                  HOME
                </Typography>
              </Box>
              <Box mx={1} className='cursor'>
                <Typography variant="h6" className="cor-font-typography">
                  POSTAGENS
                </Typography>
              </Box>
              <Box mx={1} className='cursor'>
                <Typography variant="h6" className="cor-font-typography">
                  TEMAS
                </Typography>
              </Box>
              <Box mx={1} className='cursor'>
                <Typography variant="h6" className="cor-font-typography">
                  CADASTRAR TEMA
                </Typography>
              </Box>

              <Link to='/login' className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                  <Typography variant="h6" className="cor-font-typography">
                    LOGOUT
                  </Typography>
                </Box>
              </Link>

              <Box mx={1} className='cursor'>
                <MenuComponent />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
