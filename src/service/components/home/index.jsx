import React, { useEffect } from "react";
import Navbar from "../navbar";
import { ToastContainer, toast } from "react-toastify";
import { Box, Grid } from "@mui/material";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import idUser from "../../store/idUser";

const Home = () => {
  const { id } = useParams();

  const setOwnerId = useSetRecoilState(idUser);

  useEffect(() => {
    setOwnerId(id);
  }, []);

  return (
    <Box component={"section"}>
      <Grid container overflow={"visible"}>
        <Grid item xs={2} position={"sticky"} top={"0"}>
          <Navbar />
        </Grid>
        <Grid
          item
          xs={10}
          sx={{
            background: "black",
            minHeight: "100vh",
            padding: "50px 100px",
          }}
        >
          Home
        </Grid>
      </Grid>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Box>
  );
};

export default Home;
