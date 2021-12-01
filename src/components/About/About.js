import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "MD MIRAJ ALI" },
    { id: 2, title: "Email:", text: "mirajulislam7482@gmail.com" },
    { id: 3, title: "Phone:", text: "+88 01311249272" },
    { id: 4, title: "Linkedin", text: "md-miraj-ali-9b8318204" },
  ]);
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/man.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
              I'm a react based web designer & developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent website that improves the lives of those around me.
              </div>
              <div className="about__info-p2">
                I have experience in ReactJS, NodeJS, Bootstrap, Material UI, TailwindCSS, React Native also html css java script etc. I can thes work very easily.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
