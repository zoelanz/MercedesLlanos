import {FiExternalLink} from "react-icons/fi"

function ExtLink({ link }) {
  return (
    <a target="_blank" href={link}>
      <p>{link} <FiExternalLink /></p> 
    </a>
  );
}

export default ExtLink;
