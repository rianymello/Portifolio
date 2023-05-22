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
      title: "React ignite",
      description: "Um feed de postagens interativo",
      imgUrl: projImg1,
    },
    {
      title: "Minhas pizzas",
      description: "Um site de vendas de pizzas",
      imgUrl: projImg3,
    },
  
  ];

  const projectsTab2 = [
    {
      title: "Pegada ecológica",
      description: "Um site informativo",
      imgUrl: projImg1,
    },
    {
      title: "O que é um técnico de informática",
      description: "Um site informativo",
      imgUrl: projImg2,
    },
  ];

  const projectsTab3 = [
    /*Em breve será adicionado algo aqui */
  ];

  const tab1Text = "Projetos que eu venho desenvolvendo por sozinha.";
  const tab2Text = "Projetos que desenvolvi durante meu curso de gestão e programção de sistemas informáticos.";
  const tab3Text = "Projetos também desenvolvidos por mim.";

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