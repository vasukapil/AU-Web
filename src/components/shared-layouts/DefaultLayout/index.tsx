import React from "react";
import { CardMedia, Container } from "@mui/material";
//@ts-ignore
import Video from "../../../assets/video/sample.mp4";
import { Outlet } from "react-router-dom";
import Navbar from "../../shared-ui-components/Navbar";
import Footer from "../../shared-ui-components/Footer";

const DefaultLayout = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: "0px !important",
        margin: "0px !important",
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default DefaultLayout;
