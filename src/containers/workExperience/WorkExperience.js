import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { usePortfolio } from "../../portfolio.index";
import { useI18n } from "../../i18n/useI18n";

export default function WorkExperience() {
  const { t } = useI18n();
  const { workExperiences } = usePortfolio();
  if (workExperiences.display) {
    return (
      <div id="experience">
        <div className="experience-container" id="workExperience">
          <div>
            <h1 className="experience-heading">{t("workExperience.title", "Experiences")}</h1>
            <div className="experience-cards-div">
              {workExperiences.experience.map((card, i) => {
                return (
                  <ExperienceCard
                    key={i}
                    cardInfo={{
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      descBullets: card.descBullets
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
