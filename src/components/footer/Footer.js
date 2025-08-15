import "./Footer.scss";
import emoji from "react-easy-emoji";
import { useI18n } from "../../i18n/useI18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <div className="footer-div">
      <p className="footer-text">
        {emoji(t("footer.madeWith", "Made with ❤️ by DeveloperFolio Team"))}
      </p>
      <p className="footer-text">
        {t("footer.themeBy", "Theme by")}{" "}
        <a
          href="https://github.com/saadpasta/developerFolio"
          target="_blank"
          rel="noreferrer"
        >
          {t("footer.themeName", "developerFolio")}
        </a>
      </p>
    </div>
  );
}
