import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import { iconMap } from "./simpleIconsMap";


export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {iconMap[skills.skillName] ? (
                  <svg className="skill-icon-svg" role="img" viewBox="0 0 24 24" aria-label={skills.skillName}>
                    <path d={iconMap[skills.skillName].path} />
                  </svg>
                ) : skills.iconSrc ? (
                  <img className="skill-icon-img" src={skills.iconSrc} alt={skills.skillName} />
                ) : null}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
