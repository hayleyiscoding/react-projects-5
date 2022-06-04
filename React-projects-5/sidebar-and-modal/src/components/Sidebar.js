import {
  FaCalendar,
  FaFacebook,
  FaFolderOpen,
  FaHome,
  FaLinkedin,
  FaPagelines,
  FaReddit,
  FaTeamspeak,
  FaTwitter,
} from "react-icons/fa";
import logo from "../images/logo.svg";

const links = [
  {
    id: 1,
    text: "Home",
    url: "/",
    icon: <FaHome />,
  },
  {
    id: 2,
    text: "Team",
    url: "/",
    icon: <FaTeamspeak />,
  },
  {
    id: 3,
    text: "Projects",
    url: "/",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    text: "Calendar",
    url: "/",
    icon: <FaCalendar />,
  },
  {
    id: 5,
    text: "Documents",
    url: "/",
    icon: <FaPagelines />,
  },
];

const socialIcons = [
  {
    id: 1,
    url: "https://altcampus.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://altcampus.com",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: "https://altcampus.com",
    icon: <FaTwitter />,
  },
  {
    id: 4,
    url: "https://altcampus.com",
    icon: <FaReddit />,
  },
];

export default function Sidebar({ setShowSideBar, showSideBar }) {
  return (
    <>
      <sidebar className='sidebar flex column justify-between'>
        <header className='flex header'>
          <img src={logo} alt='logo' className='logo' />
          <button type='button' onClick={() => setShowSideBar(!showSideBar)}>
            ❌
          </button>
        </header>
        <section>
          <ul className='links'>
            {links.map((link) => {
              const { text, url, icon } = link;
              return (
                <li>
                  <a href={url}>
                    <span>{icon}</span>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
        <footer>
          <ul className='flex social-icons'>
            {" "}
            {socialIcons.map((singleIcon) => {
              const { url, icon } = singleIcon;
              return (
                <li>
                  <a href={url} className='social-icon'>
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </footer>
      </sidebar>
    </>
  );
}
