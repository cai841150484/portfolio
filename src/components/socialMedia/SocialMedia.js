import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";
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

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="skill-icon-img" alt="github" src={githubIcon} />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="skill-icon-img" alt="linkedin" src={linkedinIcon} />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="skill-icon-img" alt="email" src={mailIcon} />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="skill-icon-img" alt="gitlab" src={gitlabIcon} />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="skill-icon-img" alt="facebook" src={facebookIcon} />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="skill-icon-img" alt="instagram" src={instagramIcon} />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="skill-icon-img" alt="twitter" src={twitterIcon} />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="skill-icon-img" alt="medium" src={mediumIcon} />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.stackoverflow ? (
        <a
          href={socialMediaLinks.stackoverflow}
          className="icon-button stack-overflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="skill-icon-img" alt="stackoverflow" src={stackoverflowIcon} />
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.kaggle ? (
        <a
          href={socialMediaLinks.kaggle}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="skill-icon-img" alt="kaggle" src={kaggleIcon} />
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
