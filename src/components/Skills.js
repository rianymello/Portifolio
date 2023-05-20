import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import logo from "../logo.png";
import iconReact from "../assets/img/react-icon.png";
import iconJavascript from "../assets/img/javacript-icon.png";
import iconGit from "../assets/img/git-icon.png";
import iconGithub from "../assets/img/github-icon.png";
import iconTypescript from "../assets/img/typescript-icon.png";
import iconCss from "../assets/img/css-icon.png";
import iconHtml from "../assets/img/html-icon.png";
import iconFigma from "../assets/img/figma-icon.png";
import iconMiro from "../assets/img/miro-icon.png";
import iconTrello from "../assets/img/trello-icon.png";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                          <div className="item">
                            <img src={iconReact} alt="Image" />
                            <h5>React.js</h5>
                          </div>
                          <div className="item">
                          <img src={iconJavascript} alt="Image" />
                            <h5>Javacript</h5>
                          </div>
                          <div className="item">
                          <img src={iconGit} alt="Image" />
                          <h5>Git</h5>
                          </div>
                          <div className="item">
                          <img src={iconGithub} alt="Image" />
                          <h5>Github</h5>
                          </div>
                          <div className="item">
                          <img src={iconTypescript} alt="Image" />
                          <h5>Typescript</h5>
                          </div>
                          <div className="item">
                          <img src={iconCss} alt="Image" />
                            <h5>CSS</h5>
                          </div>
                          <div className="item">
                          <img src={iconHtml} alt="Image" />
                            <h5>HTML</h5>
                          </div>
                          <div className="item">
                          <img src={iconFigma} alt="Image" />
                            <h5>Figma</h5>
                          </div>
                          <div className="item">
                          <img src={iconTrello} alt="Image" />
                            <h5>Trello</h5>
                          </div>
                          <div className="item">
                          <img src={iconMiro} alt="Image" />
                            <h5>Miro</h5>
                          </div>
                        </Carousel>

                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
