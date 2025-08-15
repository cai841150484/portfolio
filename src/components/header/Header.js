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
            {/* Language Switcher: EN | 中文 */}
            <button
              type="button"
              aria-label={t("header.langSwitcherAria", "Switch language")}
              className="lang-switch"
              onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
            >
              <span className={language === "en" ? "active" : ""}>{t("header.langEN", "EN")}</span>
              <span> | </span>
              <span className={language === "zh" ? "active" : ""}>{t("header.langZH", "中文")}</span>
            </button>
          </li>
          <li>
            <Link to="/projects">{t("header.projects", "Projects")}</Link>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
