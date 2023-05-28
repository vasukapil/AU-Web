import {
  CardMedia,
  Box,
  Typography,
  Grid,
  Divider,
  IconButton,
} from "@mui/material";
//@ts-ignore
import Video from "../../../assets/video/sample1.mp4";
import React from "react";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ContactUsContainer from "../ContactUsContainer";
import OurTeamContainer from "../OurTeamContainer";
import AssistantIcon from "@mui/icons-material/Assistant";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import InfoIcon from "@mui/icons-material/Info";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
import TocRoundedIcon from "@mui/icons-material/TocRounded";
import "./Home.css";
import Analytics from "./Analytics";
import { Careers } from "./Careers";
import Temporary from "./Temporary";
import { CSSTransition } from "react-transition-group";

const HomePageContainer = () => {
  const styl = {
    width: "22%",
    minWidth: "250px",
    height: "230px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    border: "1px solid #002d62",

    borderRadius: "8px",
    padding: "20px",
    "&:hover": {
      cursor: "pointer",
      color: "rgb(253, 185, 19) !important",
      backgroundColor: "#5282b8",
    },
  };

  const serviceItems = [
    {
      key: "Home",
      url: "",
      icon: ManageSearchIcon,
      desc: "This is the searvice description of the compnay that will be updated soon.",
    },
    {
      key: "About",
      url: "",
      icon: AssistantIcon,
      desc: "This is the searvice description of the compnay that will be updated soon.",
    },
    {
      key: "Services",
      url: "",
      icon: GroupsIcon,
      desc: "This is the searvice description of the compnay that will be updated soon.",
    },
    {
      key: "Contact Us",
      url: "",
      icon: SupervisedUserCircleIcon,
      desc: "This is the searvice description of the compnay that will be updated soon.",
    },
    {
      key: "Career",
      url: "",
      icon: InfoIcon,
      desc: "This is the searvice description of the compnay that will be updated soon.",
    },
    {
      key: "Our Team",
      url: "",
      icon: ManageSearchIcon,
      desc: "This is the searvice description of the compnay that will be updated soon.",
    },
    {
      key: "Our Team",
      url: "",
      icon: ManageSearchIcon,
      desc: "This is the searvice description of the compnay that will be updated soon.",
    },
    {
      key: "Our Team",
      url: "",
      icon: TocRoundedIcon,
      desc: "See all the sevice on this page",
    },
  ];
  return (
    <>
     
      <Box sx={{ background: "white" }}>
        <CardMedia
          component="video"
          sx={{
            position: "none",
            top: "59px",
            width: "100%",
            maxHeight: "500px",
            backgroundColor: "#DBDFEA",
            padding: "0px !important",
            margin: "0px !important",
            objectFit: "fill",
          }}
          src={Video}
          controls={false}
          autoPlay
          muted
        ></CardMedia>
        <img
          src="https://www.crowe.com/-/media/crowe/llp/main-images/advisory/main-header-full-advisory-overview-168034845.jpg?rev=0cccd6ff56694cf0b017364723fb46a9&w=1920&hash=DCBF62C3E6AD95066944FC58422F423E"
          className="img_css"
        />
        {/* <video
        style={{
          top: "59px",
          width: "100%",
          maxHeight: "500px",
          backgroundColor: "#DBDFEA",
          padding: "0px !important",
          margin: "0px !important",
        }}
        src={Video}
        controls={false}
        autoPlay
        muted
      ></video> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "5% 5%",
            backgroundColor: "#fff",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              width: "250px",
              // height: "6px",
              borderRadius: 12,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              // background: "rgb(253, 185, 19)",
            }}
          >
            Our Services
            <Divider
              sx={{
                width: "250px",
                marginTop: "5px",
                height: "6px",
                borderRadius: 12,
                background: "rgb(253, 185, 19)",
              }}
            />
          </Typography>
       
        </Box>

        <Box
          sx={{
            margin: "5% 5%",
            marginTop : "0px",
            display: "flex",
            background: "#ffffff",
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            flexWrap: "wrap",
          }}
        >
          {serviceItems?.map((data, index) => (
            <Box sx={styl} className="cardDiv">
              {/* <IconButton> */}
              <data.icon
                sx={{ height: "40px", width: "50px", color: "#002d62" }}
                className="cardDivText"
              />
              {/* </IconButton> */}
              {serviceItems.length != index + 1 && (
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "rgb(10, 19, 69)",
                    paddingTop: "5px",
                  }}
                  className="cardDivText"
                >
                  Service-{index}
                </Typography>
              )}
              {serviceItems.length == index + 1 && (
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "rgb(10, 19, 69",
                    paddingTop: "5px",
                  }}
                  className="cardDivText"
                >
                  All Services
                </Typography>
              )}
              <Typography
                sx={{
                  fontWeight: "700",
                  color: "rgb(82, 82, 85)",
                  paddingTop: "5px",
                  fontSize: "14px",
                }}
                className="cardDivText"
              >
                {data?.desc}
              </Typography>
              {serviceItems.length != index + 1 && (
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "002d62",
                    paddingTop: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "80%",
                  }}
                  className="cardDivText2"
                >
                  <div> Read more</div>
                  <DoubleArrowRoundedIcon
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                  />
                </Typography>
              )}
              {serviceItems.length == index + 1 && (
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "002d62",
                    paddingTop: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "80%",
                  }}
                  className="cardDivText2"
                >
                  <div>Click here</div>
                  <DoubleArrowRoundedIcon
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                  />
                </Typography>
              )}
            </Box>
          ))}
        </Box>
        <OurTeamContainer />
      </Box>
      <Analytics />
      {/* <Temporary/> */}
      
      <Careers />

      <ContactUsContainer />
    </>
  );
};

export default HomePageContainer;
