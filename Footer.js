import React from 'react';

const Footer = ({ toggleDarkMode }) => {
  return (
    <footer>
      <p>Design by Callum Springall</p>
      <div className="socials">
        <a className="github" href="https://github.com/callumspringall" target="_blank" rel="noreferrer">GitHub</a>
        <a className="linkedin" href="https://uk.linkedin.com/in/callum-springall-387698132" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;