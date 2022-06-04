import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { links, socialIcons } from "./data";
import React from "react";

export default function App() {
  const [showLinks, setShowLinks] = React.useState(false);
  const linksRef = React.useRef(null);
  const linksContainerRef = React.useRef(null);

  React.useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);

  return (
    <nav className='flex justify-between'>
      <div className='nav-header flex justify-between'>
        <img src={logo} alt='logo'></img>
        <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
      <div className='links-container show-container' ref={linksContainerRef}>
        <ul className='links flex' ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className='social-icons flex'>
        {socialIcons.map((singleIcon) => {
          const { id, url, icon } = singleIcon;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
