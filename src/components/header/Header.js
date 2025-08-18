import {Link} from "react-router-dom";
import Headroom from "react-headroom";
import "./Header.scss";
import { usePortfolio } from "../../portfolio.index";
import { useI18n } from "../../i18n/useI18n";

function Header() {
  const { t, language, setLanguage } = useI18n();
  const { greeting } = usePortfolio();

  return (
    <Headroom>
      <header className="header">
        <Link to="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="/projects">{t("header.projects", "Projects")}</Link>
          </li>
          <li>
            {/* Language Switcher: toggle switch EN / 中文 */}
            <button
              type="button"
              role="switch"
              aria-checked={language === "zh"}
              aria-label={t("header.langSwitcherAria", "Switch language")}
              className={`lang-toggle ${language === "zh" ? "on" : "off"}`}
              onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
            >
              <span className="labels">
                <span className={`label en ${language === "en" ? "active" : ""}`}>{t("header.langEN", "EN")}</span>
                <span className={`label zh ${language === "zh" ? "active" : ""}`}>{t("header.langZH", "中文")}</span>
              </span>
              <span className="thumb" aria-hidden="true" />
            </button>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
