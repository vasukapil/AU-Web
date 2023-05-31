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
import React, { useEffect } from "react";
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

  // useEffect(()=>{
  //   AOS.init();
  // },[])

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
      desc: "Corporate tax is levied on the companies, whether domestic or foreign. In India, the Income Tax Act..",
      title: "Corporate Tax"
    },
    {
      key: "About",
      url: "",
      icon: AssistantIcon,
      desc: "At AU, being one of the best Tax Litigation firms in Delhi, provide the best tax litigation services in Delhi",
      title: "Income Tax Litigation Services"
    },
    {
      key: "Services",
      url: "",
      icon: GroupsIcon,
      desc: "As a firm of Chartered Accountants, we at AU focus on providing the best consultancy for meeting your tax compliances on time",
      title: "Direct & Indirect Tax"
    },
    {
      key: "Contact Us",
      url: "",
      icon: SupervisedUserCircleIcon,
      desc: "We at AU help you in calculating your correct income tax payable or refundable",
      title: "Income Tax Return Filings"
    },
    {
      key: "Career",
      url: "",
      icon: InfoIcon,
      desc: "We are considered the best CA for NRI return filing in India and the best income tax consultant in Delhi",
      title: "ITR Filing services at AU"
    },
    {
      key: "Our Team",
      url: "",
      icon: ManageSearchIcon,
      desc: "This is the searvice description of the compnay that will be updated soon.",
      title: "Procedure for Assessment"
    },
    {
      key: "Our Team",
      url: "",
      icon: ManageSearchIcon,
      desc: "This is the searvice description of the compnay that will be updated soon.",
      title: "GST Consultancy Services"
    },
    {
      key: "Our Team",
      url: "",
      icon: TocRoundedIcon,
      desc: "AU is among the best GST registration service providers in Delhi. Our range of services makes it seamless for you to comply with tax policies.",
      title: "GST Audit"
    },
  ];


  return (
    <>
      <Box sx={{ background: "white" , overflow : "hidden"}}>
        <CardMedia
          component="video"
          sx={{
            position: "none",
            top: "59px",
            width: "100%",
            maxHeight: "500px",
            backgroundColor: "#ffffff",
            padding: "0px !important",
            margin: "0px !important",
            objectFit: "fill",
            overflow: 'hidden',
            filter:"brightness(60%)",
          }}
          src={Video}
          controls={false}
          autoPlay
          muted
        >
          {/* HiksbdfkbasdasaS */}
        </CardMedia>
        <div className='animateTextForHome'>
          We offer expert financial services, auditing, tax planning, consulting, accounting solutions, and reliable financial reporting for businesses and individuals.
        </div>
        <img
          src="https://www.crowe.com/-/media/crowe/llp/main-images/advisory/main-header-full-advisory-overview-168034845.jpg?rev=0cccd6ff56694cf0b017364723fb46a9&w=1920&hash=DCBF62C3E6AD95066944FC58422F423E"
          className="img_css"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "5% 5% 2% 5%",
            marginTop:"25px",
            backgroundColor: "#fff",
            overflow: 'hidden',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              width: "250px",
              borderRadius: 12,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Our Services
            <Divider sx={{
              width: "250px",
              height: "6px",
              borderRadius: 12,
              margin: "5px 0 15px 0",
              background: "rgb(253, 185, 19)",
            }} />
          </Typography>

        </Box>

        <Box
          sx={{
            margin: "0 5%",
            display: "flex",
            background: "#ffffff",
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            flexWrap: "wrap",
            overflow: 'hidden',
          }}
        >
          {serviceItems?.map((data, index) => (
            // data-aos="zoom-in"
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
                  {data?.title}
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
                    className="doblearrow"
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
