import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import { iconMap } from "./simpleIconsMap";

export default function SoftwareSkill() {
  const base = import.meta.env.BASE_URL || "/";
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            const icon = iconMap[skills.skillName];
            const src = skills.iconSrc
              ? (skills.iconSrc.startsWith("/") ? `${base}${skills.iconSrc.slice(1)}` : `${base}${skills.iconSrc}`)
              : null;
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {icon ? (
                  <svg className="skill-icon-svg" role="img" viewBox="0 0 24 24" aria-label={skills.skillName}>
                    <path d={icon.path} />
                  </svg>
                ) : src ? (
                  <img className="skill-icon-img" src={src} alt={skills.skillName} />
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
