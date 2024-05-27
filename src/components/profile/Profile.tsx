import React from "react";
import { RiGithubFill } from "@remixicon/react";
import { RiLinkedinBoxFill } from "@remixicon/react";
import { RiInstagramFill } from "@remixicon/react";
import { RiTwitterXFill } from "@remixicon/react";

interface ProfileProps {
  logo: string;
  name: string;
  occupation: string;
  quote: string;
  contactLink: string;
  github?: string;
  linkdin?: string;
  instagram?: string;
  twitter?: string;
}

export const Profile: React.FC<ProfileProps> = props => {
  return (
    <div className="profile">
      <div className="content">
        <img src={props.logo} alt="profile" className="logo" />
        <h1 className="name">{props.name}</h1>
        <h2 className="occupation">{props.occupation}</h2>
        <p className="quote">{props.quote}</p>
        <a href={props.contactLink} className="contact-me-link">
          Contact me
        </a>
        <div className="socials">
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to GitHub profile"
          >
            <RiGithubFill size={19} color="#4338CA" aria-hidden={true}/>
          </a>
          <a
            href={props.linkdin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Linkedin profile"
          >
            <RiLinkedinBoxFill size={19} color="#4338CA" aria-hidden={true}/>
          </a>
          <a
            href={props.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Instagram profile"
          >
            <RiInstagramFill size={19} color="#4338CA" aria-hidden={true}/>
          </a>
          <a
            href={props.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Twitter profile"
          >
            <RiTwitterXFill size={19} color="#4338CA" aria-hidden={true}/>
          </a>
        </div>
      </div>
    </div>
  );
};
