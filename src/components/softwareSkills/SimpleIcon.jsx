import React from "react";
import {
  siFigma,
  siAdobeillustrator,
  siAdobephotoshop,
  siAdobexd,
  siAdobeaftereffects,
  siAdobelightroom,
  siAdobeindesign,
  siProcessingfoundation,
  siHtml5,
  siCss3,
} from "simple-icons/icons";

const iconMap = {
  Figma: siFigma,
  "Adobe Illustrator": siAdobeillustrator,
  "Adobe Photoshop": siAdobephotoshop,
  "Adobe XD": siAdobexd,
  "After Effects": siAdobeaftereffects,
  Lightroom: siAdobelightroom,
  InDesign: siAdobeindesign,
  Processing: siProcessingfoundation,
  HTML5: siHtml5,
  CSS3: siCss3,
};

export default function SimpleIcon({ name, className }) {
  const icon = iconMap[name];
  if (!icon) return null;
  return (
    <svg
      className={className}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={name}
    >
      <path d={icon.path} />
    </svg>
  );
}

