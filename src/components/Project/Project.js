import AOS  from "aos";
import React from "react";
import 'aos/dist/aos.css';

const Services = () => {
  AOS.init();
  const [header] = React.useState({
    mainHeader: "Projects",
    subHeading: "My Projects",
    text:
      "I am Full stack junior Web developer I am doing many projects some of them here.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <img style={{height: "200px", width: "100%"}} src="/images/car-magazine-32f03.web.app_.png" alt="" />,
      link: "https://car-magazine-32f03.web.app/",
      heading: "Car Megazine",
      text:
        "This is a car Selling and buying website",
    },
    {
      id: 2,
      icon: <img style={{height: "200px", width: "100%"}} src="/images/travel-agency-new-york.web.app_.png" alt="" />,
      link: "https://travel-agency-new-york.web.app/",
      heading: "Travel Agency",
      text:
        "This Website create for New york travel agency",
    },
    {
      id: 3,
      icon: <img style={{height: "200px", width: "100%"}} src="/images/child-health-care-center.firebaseapp.com_.png" alt="" />,
      link: "https://child-health-care-center.firebaseapp.com/",
      heading: "Child health care",
      text:
        "Child heath care website is create for child care",
    },
    
  ]);
  return (
    <div id="project" className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div data-aos="flip-up" className="col-6 bgMain">
                <div className="services__box">
                  <div style={{textAlign: "center"}}>{info.icon}</div>
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                  <button style={{padding: 5, color: "white"}} className="btn button  btn-info mb-2"><a style={{padding: 5, color: "white", textDecoration: "none"}} href={info?.link}  target="_blank">See Details</a></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
