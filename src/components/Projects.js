import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("first");

  const projectsTab1 = [
    {
      title: "Business Startup 1",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup 2",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup 3",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  
  ];

  const projectsTab2 = [
    {
      title: "Business Startup 4",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup 5",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup 6",
      description: "Design & Development",
      imgUrl: projImg3,
    }, 
    {
      title: "Business Startup 6",
      description: "Design & Development",
      imgUrl: projImg3,
    },
   
  ];

  const projectsTab3 = [
    {
      title: "Business Startup 7",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup 8",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup 9",
      description: "Design & Development",
      imgUrl: projImg3,
    },
   
  ];

  const tab1Text = "Esses são alguns dos projetos que eu venho desenvolvendo por sozinha.";
  const tab2Text = "Esses são alguns dos projetos que desenvolvi durante meu curso de gestão e programção de sistemas informáticos.";
  const tab3Text = "Esses são outros projetos também desenvolvidos por mim.";

  const currentTabText = activeTab === "first" ? tab1Text : activeTab === "second" ? tab2Text : tab3Text;


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility onChange={(isVisible) => setIsVisible(isVisible)}>
              <div className={`animate__animated ${isVisible ? "animate__fadeIn" : ""}`}>
                <h2>Projects</h2>
                <p>
                  {currentTabText}
                </p>
                <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)}>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projetos pessoais</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projetos escolares</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Outros projetos</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projectsTab1.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {projectsTab2.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {projectsTab3.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};