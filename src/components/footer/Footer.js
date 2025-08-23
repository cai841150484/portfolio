import "./Footer.scss";
import { useI18n } from "../../i18n/useI18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <div className="footer-div">
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
