import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { usePortfolio } from "../../portfolio.index";
import codingPerson from "../../assets/lottie/codingPerson.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import developerActivity from "../../assets/images/developerActivity.svg";

export default function Skills() {
  const { illustration, skillsSection } = usePortfolio();
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <div className="skills-image-div">
          {illustration.animated ? (
            <DisplayLottie animationData={codingPerson} />
          ) : (
            <img alt="Man Working" src={developerActivity}></img>
          )}
        </div>
        <div className="skills-text-div">
          <h1 className="skills-heading">
            {skillsSection.title}{" "}
          </h1>
          <p className="subTitle skills-text-subtitle">
            {skillsSection.subTitle}
          </p>
          <SoftwareSkill />
          <div>
            {skillsSection.skills.map((skills, i) => {
              return (
                <p key={i} className="subTitle skills-text">
                  {skills}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
