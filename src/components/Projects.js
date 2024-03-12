import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img4.jpg";
import projImg4 from "../assets/img/project-img3.png";
import projImg5 from "../assets/img/project-img5.jpeg";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Battery Management System for E-Mobility Vehicle",
      description: "Developed a battery management system for electric vehicles, focusing on optimal power output, thermal management, and extended range.",
      imgUrl: projImg1,
    },
    {
      title: "Clone website of Netflix",
      description: "Created a clone website of Netflix with HTML, CSS, and JavaScript, incorporating user authentication using JSON. Responsive design for all screen sizes.",
      imgUrl: projImg2,
    },
    {
      title: "Building RESTful API Using Spring Boot and PostgreSQL",
      description: "Developed a robust RESTful API using Spring Boot and PostgreSQL, containerized the application using Docker, and deployed it to Kubernetes, ensuring scalability and efficient management within Pods.",
      imgUrl: projImg3,
    },
    {
      title: "Dynamic Sales Analytics Hub",
      description: "Engineered a Sales Analytics Hub with Power BI, harmonising product, customer, and territory data. Employed dynamic visualizations, including line and donut charts, for a succinct yet impactful dashboard, enhancing strategic decision-making in sales analytics.",
      imgUrl: projImg4,
    },
    {
      title: "Battery Management System for E-Mobility Vehicle",
      description: "Developed a battery management system for electric vehicles, focusing on optimal power output, thermal management, and extended range.",
      imgUrl: projImg5,
    },
    {
      title: "Clone website of Netflix",
      description: "Created a clone website of Netflix with HTML, CSS, and JavaScript, incorporating user authentication using JSON. Responsive design for all screen sizes.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
             
                  Implemented diverse projects showcasing proficiency in Java, JavaScript, HTML, CSS, ReactJS,
                  Spring Boot, and database management. Developed responsive web solutions, 
                  RESTful APIs, and dynamic data visualizations using tools like Power BI. 
                  Strong problem-solving skills demonstrated throughout.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
