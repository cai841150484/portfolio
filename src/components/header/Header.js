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
      <header className="header" role="banner">
        <a href="#main" className="skip-link">{t("header.skipToContent", "Skip to content")}</a>
        <Link to="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" aria-label="Toggle navigation" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
          aria-controls="site-menu"
          aria-expanded="false"
        >
          <span className="navicon"></span>
        </label>
        <ul className="menu" id="site-menu" role="navigation" aria-label="Primary">
          <li>
            <Link to="/projects">{t("header.projects", "Projects")}</Link>
          </li>
          <li>
            {/* Language Switcher: integrated pill with labels inside */}
            <button
              type="button"
              role="switch"
              aria-checked={language === "zh"}
              aria-label={t("header.langSwitcherAria", "Switch language")}
              className={`lang-toggle ${language === "zh" ? "on" : "off"}`}
              onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
            >
              <span className="pill" aria-hidden="true">
                <span className="thumb" />
              </span>
              <span
                className={`option label en ${language === "en" ? "active" : ""}`}
                onClick={(e) => { e.stopPropagation(); setLanguage("en"); }}
              >
                {t("header.langEN", "EN")}
              </span>
              <span
                className={`option label zh ${language === "zh" ? "active" : ""}`}
                onClick={(e) => { e.stopPropagation(); setLanguage("zh"); }}
              >
                {t("header.langZH", "中文")}
              </span>
            </button>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
