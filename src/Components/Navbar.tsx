import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Typography color="inherit" component="div">
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                padding: "1rem",
              }}
              to="/"
            >
              {" "}
              Home
            </Link>
          </Typography>

          <Typography color="inherit" component="div">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/search"
            >
              Search
            </Link>
          </Typography>

          <Typography color="inherit" component="div">
            <Link style={{ color: "red", textDecoration: "none" }} to="/flix">
              Flix(in progress)
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
