import { Box, CardMedia, Grid, Typography, Divider } from "@mui/material";
import React from "react";
//@ts-ignore
import Profile from "../../../assets/images/profile.jpg";
//@ts-ignore
import Profile1 from "../../../assets/images/profile1.jpg";
//@ts-ignore
import Profile2 from "../../../assets/images/profile2.jpg";
//@ts-ignore
import Profile3 from "../../../assets/images/profile3.jpg";

const OurTeamContainer = () => {
  return (
    <Box sx={{paddingBottom:'30px' }}>
      <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center", padding: "20px", margin:"5%",width:"90%",}}>
        {/* <Typography variant="h4">Our Strength</Typography> */}
        <Typography variant="h4" sx={{
          width: "250px",
          // height: "6px",
          borderRadius: 12,
          display: 'flex',
           flexDirection: "column",
            justifyContent: 'center', 
            alignItems: "center"
          // background: "rgb(253, 185, 19)",
        }}>
          Our Strength
          <Divider sx={{
            width: "250px",
            height: "6px",
            borderRadius: 12,
            margin:"5px 0 15px 0",
            background: "rgb(253, 185, 19)",
          }} />
        </Typography> 
        <Typography
          align="left"
          variant="h6"
          sx={{ fontWeight: "bold", color: "rgb(102, 102, 102)", paddingTop: "20px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          sagittis sem quis accumsan vehicula. Integer vitae enim nec enim
          porta ullamcorper. Nunc
        </Typography>
      </Box>
      <Grid
        sx={{ gap: "20px",margin:"5%",width:"90%" }}
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        container
      >
        <Grid
          item
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            texAlign: "left",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <CardMedia
            sx={{ borderRadius: "100%", height: 200, width: 200 }}
            component="img"
            src={Profile}
          />
          <Typography variant="h5">Jhon Doe</Typography>
          <Typography variant="h6" sx={{ fontSize: "16px" }}>
            quae ab illo lourm ipsum
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            texAlign: "left",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <CardMedia
            sx={{ borderRadius: "100%", height: 200, width: 200 }}
            component="img"
            src={Profile1}
          />
          <Typography variant="h5">Jhon Doe</Typography>
          <Typography variant="h6" sx={{ fontSize: "16px" }}>
            quae ab illo lourm ipsum
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            texAlign: "left",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <CardMedia
            sx={{ borderRadius: "100%", height: 200, width: 200 }}
            component="img"
            src={Profile2}
          />
          <Typography variant="h5">Jhon Doe</Typography>
          <Typography variant="h6" sx={{ fontSize: "16px" }}>
            quae ab illo lourm ipsum
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            texAlign: "left",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <CardMedia
            sx={{ borderRadius: "100%", height: 200, width: 200 }}
            component="img"
            src={Profile3}
          />
          <Typography variant="h5">Jhon Doe</Typography>
          <Typography variant="h6" sx={{ fontSize: "16px" }}>
            quae ab illo lourm ipsum
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurTeamContainer;
