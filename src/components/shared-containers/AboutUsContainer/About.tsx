import React from "react";
import "./styles.css";
import Profile1 from "../AboutUsContainer/profile.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const AboutUs = () => {

  const cardData = [
    {
      title : "Our Vision",
      desc : "Our Vision is to fulfil the requirements of every customer by offering them individually tailored solutions for their businesses. Our primary objective is to become an all-encompassing resource for each of our clients' accounting, taxation, and various other needs while simultaneously evolving our company necessary for maintaining up with constantly changing trends in the market. We enthusiastically endorse ethical business conduct. Our team of highly qualified and experienced professionals, undergoes regular training so that learning never stops and are stay up to date with market advancements and trends to strengthen their skill set, set us apart from those around us.",
      img : ""
    },
    {
      title : "Our Mission",
      desc : "Our mission is to maximise our clients' value while simultaneously helping them enhance their future business opportunities. We accomplish this by adding professional value to every service we execute. We make sure that everyone in the organisation is aware of our aim, so that everyone is dedicated to the same objective. Some of the fundamental corporate values we adhere to are professional ethics, high-quality services, and positive client relationships. To accomplish the established objectives of the organisation, we work together.",
      img : ""
    },
    {
      title : "Why AU?",
      desc : "As a Leading Multidisciplinary Consultancy company AU Corporate is situated in New Delhi. The greatest levels of professional integrity, independence, ethics, and neutrality are upheld by AU. To assure excellence and high quality in all the services we offer, we have a dedicated team of experts for each topic. We adhere to transparent corporate standards and take the best precautions to safeguard your privacy and confidentiality. Our long history of pleased and contented customers over a number of years is an outcome of our committed both in-person and virtual services and dependable technical support. You may reach out AU for any engagement if you're seeking assistance from professionals.",
      img : ""
    }
  ]
  return (
    <div className="about-us overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
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
                The corporate was established in the year 2016 with a vision to provide
                customers innovative solutions to the complex business situations faced
                by its clients. AU works as a catalyst for the business growth of its
                clients. The corporate office of the firm is located in Connaught Place,
                the Heart of the National Capital New Delhi. The services rendered by AU
                range from India Entry Level Strategy, Business Establishment in India,
                Bookkeeping & Accounting; Virtual CFO, Arbitration Support and Expert
                Witness, Income Tax, GST & International Taxation Advisory Compliance and
                Litigation, RBI & FEMA Compliance, Transaction Advisory, Company Law
                Matters, Representing as Counsel, Financing and Loan Syndication, Audit
                and Assurance, Mergers and Acquisition to Corporate, Financial and Risk
                Advisory.
              </p>
              <button className="btn">Learn More</button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img className="team-image" src={Profile1} alt="Team" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-10">
          <Card className="flex-row w-full max-w-[48rem] bg-white rounded-lg shadow-md">
            <CardHeader shadow={false} floated={false} className="w-1/5 shrink-0 m-0 rounded-r-none border-r-2 border-blue-900">
              <img 
                src="https://images.unsplash.com/photo-1621440318464-72633426377b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80" 
                alt="image" 
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody className="p-4 text-justify">
              <Typography variant="h6" color="blue" className="uppercase mb-4">Our Mission</Typography>
              <Typography color="gray" className="font-normal mb-8">
                Our mission is to maximise our clients' value while simultaneously helping them enhance their future business opportunities. We accomplish this by adding professional value to every service we execute. We make sure that everyone in the organisation is aware of our aim, so that everyone is dedicated to the same objective. Some of the fundamental corporate values we adhere to are professional ethics, high-quality services, and positive client relationships. To accomplish the established objectives of the organisation, we work together.
              </Typography>
            </CardBody>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row mt-10">
          <Card className="flex-row w-full max-w-[48rem] bg-white rounded-lg shadow-md md:relative md:left-[34%]">
            <CardHeader shadow={false} floated={false} className="w-1/5 shrink-0 m-0 rounded-r-none border-r-2 border-blue-900">
              <img 
                src="https://images.unsplash.com/photo-1559757742-654d5da2eaab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bnVtYmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                alt="image" 
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody className="p-4 text-justify">
              <Typography variant="h6" color="blue" className="uppercase mb-4">Why AU?</Typography>
              <Typography color="gray" className="font-normal mb-8">
                As a Leading Multidisciplinary Consultancy company AU Corporate is situated in New Delhi. The greatest levels of professional integrity, independence, ethics, and neutrality are upheld by AU. To assure excellence and high quality in all the services we offer, we have a dedicated team of experts for each topic. We adhere to transparent corporate standards and take the best precautions to safeguard your privacy and confidentiality. Our long history of pleased and contented customers over a number of years is an outcome of our committed both in-person and virtual services and dependable technical support. You may reach out AU for any engagement if you're seeking assistance from professionals.
              </Typography>
            </CardBody>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row mt-10">
          <Card className="flex-row w-full max-w-[48rem] bg-white rounded-lg shadow-md">
            <CardHeader shadow={false} floated={false} className="w-1/5 shrink-0 m-0 rounded-r-none border-r-2 border-blue-900">
              <img 
                src="https://images.unsplash.com/photo-1559757740-e85122cb7466?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bnVtYmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                alt="image" 
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody className="p-4 text-justify">
              <Typography variant="h6" color="blue" className="uppercase mb-4">Our Vision</Typography>
              <Typography color="gray" className="font-normal mb-8">
                Our Vision is to fulfil the requirements of every customer by offering them individually tailored solutions for their businesses. Our primary objective is to become an all-encompassing resource for each of our clients' accounting, taxation, and various other needs while simultaneously evolving our company necessary for maintaining up with constantly changing trends in the market. We enthusiastically endorse ethical business conduct. Our team of highly qualified and experienced professionals, undergoes regular training so that learning never stops and are stay up to date with market advancements and trends to strengthen their skill set, set us apart from those around us. 
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
