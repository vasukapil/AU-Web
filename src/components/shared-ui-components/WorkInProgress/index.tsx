import React from "react";
import {Box, Button, CardMedia } from "@mui/material";
//@ts-ignore
import WorkInProgressImage from "../../../assets/images/workInProgress.png";
import { useNavigate } from "react-router-dom";

const WorkInProgress = () => {
  const navigate = useNavigate();
  return (
      <Box sx={{  maxWidth: "500px",
          marginLeft: "auto",
          marginRight: "auto" }}> 
      <CardMedia
        component="img"
        image={WorkInProgressImage}
        alt="Work In Progress"
      />
          <Box sx={{textAlign: "center"}}>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Back To HOMEPAGE
        </Button>
      </Box>
    </Box>
  );
};

export default WorkInProgress;
