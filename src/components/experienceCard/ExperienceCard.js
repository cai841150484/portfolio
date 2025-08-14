import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div className="experience-header">
        <h5 className="experience-company">{cardInfo.company}</h5>
        <span className={isDark ? "experience-date dark-mode-text" : "experience-date"}>
          {cardInfo.date}
        </span>
      </div>
      <div className="experience-text-details">
        <h5 className={isDark ? "experience-role dark-mode-text" : "experience-role"}>
          {cardInfo.role}
        </h5>
        <p className={isDark ? "subTitle experience-desc dark-mode-text" : "subTitle experience-desc"}>
          {cardInfo.desc}
        </p>
        <ul className="experience-bullets">
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
