import {useEffect} from "react";
import "./Top.scss";
import { useI18n } from "../../i18n/useI18n";

export default function Top() {
  const { t } = useI18n();
  function TopEvent() {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced && 'scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Fallback without animation
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }

  function scrollFunction() {
    const topButton = document.getElementById("topButton");
    if (topButton) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        topButton.style.visibility = "visible";
      } else {
        topButton.style.visibility = "hidden";
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      scrollFunction();
    };

    window.addEventListener("scroll", handleScroll);
    scrollFunction(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button onClick={TopEvent} id="topButton" type="button" title={t("topButton.title", "Go to top")} aria-label={t("topButton.aria", "Back to top")}>
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
