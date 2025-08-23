import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo}) {
  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className="experience-card">
      <div className="experience-header">
        <h5 className="experience-company">{cardInfo.company}</h5>
        <span className="experience-date">{cardInfo.date}</span>
      </div>
      <div className="experience-text-details">
        <h5 className="experience-role">{cardInfo.role}</h5>
        <p className="subTitle experience-desc">{cardInfo.desc}</p>
        <ul className="experience-bullets">
          <GetDescBullets descBullets={cardInfo.descBullets} />
        </ul>
      </div>
    </div>
  );
}
