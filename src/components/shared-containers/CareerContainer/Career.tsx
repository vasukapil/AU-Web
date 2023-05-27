import React from "react";
import { Card, Typography } from "@material-ui/core";
// import "./Careers.css";

const Career = () => {
    const bannerStyle = {
        backgroundImage: "url(path/to/image.jpg)",
        backgroundSize: "cover",
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };
    
      const cardStyle = {
        padding: "20px",
        background: "rgba(0, 0, 0, 0.5)",
        color: "#ffffff",
      };
    
      const sectionStyle = {
        padding: "20px",
      };
  return (
    <div className="">
      <section className="banner">
        <Card className="card">
          <Typography variant="h2" className="card-title">
            Careers
          </Typography>
        </Card>
      </section>

      <section className="section2"></section>

      <section className="section3">
        <Typography variant="h3" className="section-title">
          Section 3
        </Typography>
        <Typography variant="body1" className="section-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          ullamcorper venenatis maximus. Suspendisse potenti. Nunc vel felis
          dapibus, efficitur enim a, euismod magna. Vivamus ac purus nec est
          malesuada posuere. Sed auctor mauris vel facilisis venenatis. Nam nec
          nunc at purus luctus venenatis. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Nulla eget
          sapien nulla. Proin fermentum massa id diam eleifend tristique.
          Phasellus efficitur elementum nulla, sit amet volutpat nisi viverra
          vitae.
        </Typography>
      </section>

      <section className="section4">
        <Typography variant="h3" className="section-title">
          Section 4
        </Typography>
      </section>
    </div>
  );
};

export default Career;
