import { Box, CardMedia, Grid, Typography } from "@mui/material";
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
    <Box>
      <Box sx={{ textAlign: "center", padding: "20px" }}>
        <Typography variant="h4">Our Strength</Typography>
        <Typography variant="h6">
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia
        </Typography>
      </Box>
      <Grid
        sx={{ padding: "40px", gap: "20px" }}
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
