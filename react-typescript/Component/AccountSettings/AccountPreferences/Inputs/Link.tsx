import React from "react";
interface Linkprops {
  description: string;
  link: string;
  linkText: string;
}

const Link: React.FC<Linkprops> = ({ description, link, linkText }) => {
  return (
    <div className="accordion-partner-service">
      <p>{description}</p>
      <p className="mb-0">
        <a href={link}>{linkText}</a>
      </p>
    </div>
  );
};

export default Link;
