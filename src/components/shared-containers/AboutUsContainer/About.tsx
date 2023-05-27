import React from "react";
import "./styles.css"; 
import Profile1 from "../AboutUsContainer/profile.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                AU Corporate is an esteemed <strong>firm based in the heart of New
                Delhi</strong> with a diversified team of young and dynamic working
                professionals including <strong>Chartered Accountants, CPA, Company
                Secretary, Cost Accountants, Lawyers, Advocates, Industry
                Specialist, Ex Bankers,</strong> and <strong>Masters of Business
                Administration.</strong>
              </p>
              <p>
              The corporate was established in the year 2016 with a vision to provide customers innovative solutions to the complex business situations faced by its clients. AU works as a catalyst for the business growth of its clients. The corporate office of the firm is located in Connaught Place, the Heart of the National Capital New Delhi. The services rendered by AU range from India Entry Level Strategy, Business Establishment in India, Bookkeeping & Accounting; Virtual CFO, Arbitration Support and Expert Witness, Income Tax, GST & International Taxation Advisory Compliance and Litigation, RBI & FEMA Compliance, Transaction Advisory, Company Law Matters, Representing as Counsel, Financing and Loan Syndication, Audit and Assurance, Mergers and Acquisition to Corporate, Financial and Risk Advisory.
              </p>
              <button className="btn">Learn More</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <img
              className="team-image"
              src={Profile1}
              alt="Team"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
