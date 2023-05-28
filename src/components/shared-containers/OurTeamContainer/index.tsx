import { Box, CardMedia, Typography, Divider } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
//@ts-ignore
import Profile from "../../../assets/images/profile.jpg";
//@ts-ignore
import Profile1 from "../../../assets/images/profile1.jpg";
//@ts-ignore
import Profile2 from "../../../assets/images/profile2.jpg";
//@ts-ignore
import Profile3 from "../../../assets/images/profile3.jpg";
import './Service.css'

const OurTeamContainer = () => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState(50000);
  const divRef = useRef(null);
  // const elementRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      const divHeight = divRef.current?.clientHeight;
      setHeight(divHeight);
      // console.log(divHeight)
    }
  }, [divRef.current?.clientHeight]);

  // listen for scroll event and call animate function
  document.addEventListener('scroll', animate);

  // check if element is in view
  function inView() {
    // get window height
    const windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    const scrollY = window.scrollY || window.pageYOffset;

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    const scrollPosition = scrollY + windowHeight;
    // console.log(scrollPosition)
    // get element position (distance from the top of the page to the bottom of the element)
    // const elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;

    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > height+800) {
      return true;
    }

    return false;
  }

  function animate() {
    if (inView()) {
      console.log("first")
      setActive(true);
    }
  }


  return (
    <div className="serviceDiv" ref={divRef}>
      <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center", padding: "20px", margin: "5%", width: "90%", }}>
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
            margin: "5px 0 15px 0",
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
      <div className="Services">
        <div
          className={active ? "boxService" : "boxServiceNone"}
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
        </div>
        <div
          className={active ? "boxService2" : "boxServiceNone"}
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
        </div>
        <div
          className={active ? "boxService3" : "boxServiceNone"}

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
        </div>
        <div
          className={active ? "boxService4" : "boxServiceNone"}
        >
          <CardMedia
            sx={{ borderRadius: "100%", height: 200, width: 200 }}
            component="img"
            src={Profile3}
          />
          <Typography variant="h5">Jhon Doe 6</Typography>
          <Typography variant="h6" sx={{ fontSize: "16px" }}>
            quae ab illo lourm ipsum
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default OurTeamContainer;
