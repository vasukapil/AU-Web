import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'

export const Careers = () => {
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate('/career')
  }
  return (
    <section className="bg-white dark py-20 overflow-hidden">
      <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center", padding: "0 20px 15px 20px", marginBottom: "15px", width: "100%", }}>
        {/* <Typography variant="h4">Our Strength</Typography> */}
        <Typography variant="h4" sx={{
          width: "250px",
          // height: "6px",
          borderRadius: 12,
          display: 'flex',
          flexDirection: "column",
          justifyContent: 'center',
          alignItems: "center",
        }}>
          Our Careers
          <Divider sx={{
            width: "250px",
            height: "6px",
            borderRadius: 12,
            margin: "5px 0 15px 0",
            background: "rgb(253, 185, 19)",
          }} />
        </Typography>
      </Box>
      <div className="Careers">
        <div className="content">
          <h2 style={{ marginBottom: "10px" }}>Careers at AU</h2>
          <button className="button" onClick={handleOnClick}>Join Us</button>
        </div>
        <img
          src="https://bytesed.com//tf/attorg/assets/img/bg/cta-bg-01.jpg"
          alt="Background"
          className="careerImg"
        />
      </div>
    </section>
  );
};
