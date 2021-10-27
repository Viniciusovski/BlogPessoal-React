import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import "./Navbar.css";
import MenuComponent from "../Menu/MenuComponent";
function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className="toolbar">

          <Box className="boxTopo" display="flex">
          
            <Box style={{ cursor: "pointer" }}>
              <Typography variant="h5" color="inherit">
                BlogPessoal
              </Typography>
            </Box>

            <Box display="flex" justifyContent="flex-end">
              <Box mx={1} style={{ cursor: "pointer", flexDirection: "row" }}>
                <Typography variant="h6" color="inherit">
                  HOME
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  POSTAGENS
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  TEMAS
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  CADASTRAR TEMA
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
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
