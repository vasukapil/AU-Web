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

const HomePageContainer = () => {
  return (
    <Box>
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
      <Grid sx={{ padding: "40px 0", display: "flex", background: "#f2f2f2" }}>
        <Box sx={{ width: "40%", display: "flex" }}>
          <Divider
            sx={{
              margin: "0 40px",
              width: "5px",
              height: "100%",
              background: "rgb(253, 185, 19)",
            }}
          />
          <Box>
            <Typography variant="h4">Our Services</Typography>
            <Typography
              align="left"
              variant="h6"
              sx={{ fontWeight: "bold", color: "rgb(102, 102, 102)" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sagittis sem quis accumsan vehicula. Integer vitae enim nec enim
              porta ullamcorper. Nunc
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "15%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton>
            <ManageSearchIcon sx={{ height: "100px", width: "100px" }} />
          </IconButton>
          Service1
        </Box>
        <Box
          sx={{
            width: "15%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton>
            <AssistantIcon sx={{ height: "100px", width: "100px" }} />
          </IconButton>
          Service1
        </Box>
        <Box
          sx={{
            width: "15%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton>
            <GroupsIcon sx={{ height: "100px", width: "100px" }} />
          </IconButton>
          Service1
        </Box>
        <Box
          sx={{
            width: "15%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton>
            <SupervisedUserCircleIcon
              sx={{ height: "100px", width: "100px" }}
            />
          </IconButton>
          Service1
        </Box>
      </Grid>
      <OurTeamContainer />
      <ContactUsContainer />
    </Box>
  );
};

export default HomePageContainer;
