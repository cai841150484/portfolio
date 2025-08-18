import {createRef} from "react";
import "./EducationCard.scss";
import { useI18n } from "../../i18n/useI18n";

export default function EducationCard({school}) {
  const imgRef = createRef();
  const { t } = useI18n();

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };
  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);
  return (
    <div>
      <div className="education-card">
        {school.logo && (
          <div className="education-card-left">
            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="education-roundedimg"
              src={school.logo}
              alt={school.schoolName}
            />
          </div>
        )}
        <div className="education-card-right">
          <div className="education-head">
            <h5 className="education-text-school">{school.schoolName}</h5>
            {school.duration && (
              <p className="education-text-duration">{school.duration}</p>
            )}
          </div>

          <div className="education-text-details">
            <h5 className="education-text-subHeader">{school.subHeader}</h5>
            {school.desc && <p className="education-text-desc">{school.desc}</p>}

            {/* Relevant coursework */}
            {school.courses && school.courses.length > 0 && (
              <div className="education-courses">
                <p className="education-courses-title">{t("education.coursesTitle", "Relevant Coursework")}</p>
                <p className="education-courses-list">{school.courses.join(", ")}</p>
              </div>
            )}

            {/* Backward compatibility: if descBullets exists, render them */}
            {!school.courses && school.descBullets && (
              <div className="education-text-bullets">
                <ul>
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="education-card-border"></div>
    </div>
  );
}
