import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Careers = () => {
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate('/career')
  }
  return (
    <section className="bg-white dark:bg-zinc-200 py-32">
      <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center", padding: "20px", margin:"5%", marginTop: "0px",width:"90%",}}>
        {/* <Typography variant="h4">Our Strength</Typography> */}
        <Typography variant="h4" sx={{
          width: "250px",
          // height: "6px",
          borderRadius: 12,
          display: 'flex',
           flexDirection: "column",
            justifyContent: 'center', 
            alignItems: "center",
           
          // background: "rgb(253, 185, 19)",
        }}>
          Our Careers
          <Divider sx={{
            width: "250px",
            height: "6px",
            borderRadius: 12,
            margin:"5px 0 15px 0",
            background: "rgb(253, 185, 19)",
          }} />
        </Typography> 
      </Box>
      <div className="Careers mx-auto ">
        <div className="content">
          <h2 style={{marginBottom:"10px"}}>Careers at AU</h2>
          <button className="button" onClick={handleOnClick}>Join Us</button>
        </div>
        <img
          src="https://bytesed.com//tf/attorg/assets/img/bg/cta-bg-01.jpg"
          alt="Background"
        />
      </div>
    </section>
  );
};
