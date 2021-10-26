import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid } from "@material-ui/core";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className="toolbar">
          <Box style={{ cursor: "pointer" }}>
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>

          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={6}>
              <Box style={{ cursor: "pointer" }}>
                <Typography variant="h5" color="inherit">
                  BlogPessoal
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box display="flex" justifyContent="start" className="menu">
                <Box mx={1} style={{ cursor: "pointer" }}>
                  <Typography variant="h6" color="inherit">
                    home
                  </Typography>
                </Box>
                <Box mx={1} style={{ cursor: "pointer" }}>
                  <Typography variant="h6" color="inherit">
                    postagens
                  </Typography>
                </Box>
                <Box mx={1} style={{ cursor: "pointer" }}>
                  <Typography variant="h6" color="inherit">
                    temas
                  </Typography>
                </Box>
                <Box mx={1} style={{ cursor: "pointer" }}>
                  <Typography variant="h6" color="inherit">
                    cadastrar tema
                  </Typography>
                </Box>
                <Box mx={1} style={{ cursor: "pointer" }}>
                  <Typography variant="h6" color="inherit">
                    logout
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
