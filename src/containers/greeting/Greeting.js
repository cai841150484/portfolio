import React, {useContext} from "react";
import emoji from "react-easy-emoji";
import Typewriter from "react-typewriter-effect";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import MouseTrail from "../../components/mouseTrail/MouseTrail";
// import ParticlesBackground from "../../components/particles/ParticlesBackground";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import resumePdf from "./resume.pdf";
import manOnTable from "../../assets/images/manOnTable.svg";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="greet-main" id="greeting">
      {/* <ParticlesBackground /> */}
      <MouseTrail />
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              <Typewriter
                text={greeting.title || ""}
                delay={100}
                cursorColor={isDark ? "#FFFFFF" : "#000000"}
                typeSpeed={50}
                deleteSpeed={10}
                hideCursorAfterText={false}
                key={isDark ? "dark" : "light"}
              />
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <div
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              <Typewriter
                text={greeting.subTitleText || "Welcome to my portfolio"}
                delay={1200}
                cursorColor={isDark ? "#FFFFFF" : "#000000"}
                typeSpeed={30}
                deleteSpeed={10}
                hideCursorAfterText={true}
                key={isDark ? "dark-sub" : "light-sub"}
              />
            </div>
            <div id="resume" className="empty-div"></div>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
        {greeting.resumeLink && (
                <a
          href={resumePdf}
                  download="Resume.pdf"
                  className="download-link-button main-button"
                >
                  Download my resume
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          {illustration.animated ? (
            <DisplayLottie animationData={landingPerson} />
          ) : (
            <img alt="man sitting on table" src={manOnTable}></img>
          )}
        </div>
      </div>
    </div>
  );
}
