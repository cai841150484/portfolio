import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import { usePortfolio } from "../../portfolio.index";
import { useI18n } from "../../i18n/useI18n";

export default function Education() {
  const { t } = useI18n();
  const { educationInfo } = usePortfolio();
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">{t("education.title", "Education")}</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
