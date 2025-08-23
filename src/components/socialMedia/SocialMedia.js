import "./SocialMedia.scss";
import { socialMediaLinks } from "../../portfolio";
import githubIcon from "../../assets/icons/github-mono.svg?url";
import linkedinIcon from "../../assets/icons/linkedin-mono.svg?url";
import mailIcon from "../../assets/icons/mail-mono.svg?url";
import gitlabIcon from "../../assets/icons/gitlab-mono.svg?url";
import facebookIcon from "../../assets/icons/facebook-mono.svg?url";
import instagramIcon from "../../assets/icons/instagram-mono.svg?url";
import twitterIcon from "../../assets/icons/twitter-mono.svg?url";
import mediumIcon from "../../assets/icons/medium-mono.svg?url";
import stackoverflowIcon from "../../assets/icons/stackoverflow-mono.svg?url";
import kaggleIcon from "../../assets/icons/kaggle-mono.svg?url";

const SOCIAL_CONFIG = [
  { key: "github", icon: githubIcon, className: "github", label: "GitHub", href: (v) => v },
  { key: "linkedin", icon: linkedinIcon, className: "linkedin", label: "LinkedIn", href: (v) => v },
  { key: "gmail", icon: mailIcon, className: "google", label: "Email", href: (v) => `mailto:${v}` },
  { key: "gitlab", icon: gitlabIcon, className: "gitlab", label: "GitLab", href: (v) => v },
  { key: "facebook", icon: facebookIcon, className: "facebook", label: "Facebook", href: (v) => v },
  { key: "instagram", icon: instagramIcon, className: "instagram", label: "Instagram", href: (v) => v },
  { key: "twitter", icon: twitterIcon, className: "twitter", label: "Twitter", href: (v) => v },
  { key: "medium", icon: mediumIcon, className: "medium", label: "Medium", href: (v) => v },
  { key: "stackoverflow", icon: stackoverflowIcon, className: "stack-overflow", label: "Stack Overflow", href: (v) => v },
  { key: "kaggle", icon: kaggleIcon, className: "kaggle", label: "Kaggle", href: (v) => v },
];

export default function SocialMedia() {
  if (!socialMediaLinks.display) return null;

  return (
    <div className="social-media-div">
      {SOCIAL_CONFIG.map(({ key, icon, className, label, href }) => {
        const val = socialMediaLinks[key];
        if (!val) return null;
        const url = href(val);
        return (
          <a
            key={key}
            href={url}
            className={`icon-button ${className}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
          >
            <img className="skill-icon-img" alt={key} src={icon} />
            <span></span>
          </a>
        );
      })}
    </div>
  );
}
