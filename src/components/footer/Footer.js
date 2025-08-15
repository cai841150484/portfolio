import "./Footer.scss";
import emoji from "react-easy-emoji";

export default function Footer() {
  return (
    <div className="footer-div">
      <p className="footer-text">
        {emoji("Made with ❤️ by DeveloperFolio Team")}
      </p>
      <p className="footer-text">
        Theme by{" "}
        <a
          href="https://github.com/saadpasta/developerFolio"
          target="_blank"
          rel="noreferrer"
        >
          developerFolio
        </a>
      </p>
    </div>
  );
}
