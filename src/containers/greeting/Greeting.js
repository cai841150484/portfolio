import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
// Removed MouseTrail effect per request
import { usePortfolio } from "../../portfolio.index";
import { useI18n } from "../../i18n/useI18n";

import manOnTable from "../../assets/images/manOnTable.svg";

export default function Greeting() {
  const { t } = useI18n();
  const { illustration, greeting } = usePortfolio();

  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              {greeting.title || ""}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <div className="greeting-text-p subTitle">
              {greeting.subTitleText || "Welcome to my portfolio"}
            </div>
            <div id="resume" className="empty-div"></div>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text={t("buttons.contactMe", "Contact me")} href="#contact" />
              {greeting.resumeLink && (
                <a
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-link-button main-button"
                >
                  {t("buttons.downloadResume", "Download my resume")}
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
