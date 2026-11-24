import "../styles/Footer.css";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const footerGroups = [
  {
    title: "ABOUT THE CHURCH",
    links: [
      { label: "Our Story", href: "#about" },
      { label: "Our Vision", href: "#vision" },
      { label: "Our Beliefs", href: "/about" },
      { label: "Community Outreach", href: "#outreach" },
    ],
  },
  {
    title: "EXPLORE",
    links: [
      { label: "Sermons & Teachings", href: "#sermons" },
      { label: "Events & Programmes", href: "#events" },
      { label: "Resources", href: "#resources" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "GET IN TOUCH",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Prayer Request", href: "/contact" },
      { label: "Find Us", href: "#visit" },
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://web.facebook.com/ncbcofatedo",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "#",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "#",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://www.youtube.com/@ncbcofatedo",
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Footer columns */}
        <div className="footer-top">
          {footerGroups.map((group) => (
            <div className="footer-column" key={group.title}>
              <h3>{group.title}</h3>

              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Invitation */}
          <div className="footer-column footer-invitation">
            <h3>JOIN US THIS WEEK</h3>

            <p>
              There is a place for you at New Covenant Baptist Church. Come
              worship, grow in faith, and be part of our community.
            </p>

            <a href="#visit" className="footer-visit-button">
              PLAN YOUR VISIT
            </a>
          </div>
        </div>

        {/* Social media icons */}
        <div className="footer-socials">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.url}
                aria-label={social.name}
                title={social.name}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Church statement */}
        <div className="footer-statement">
          <p>
            We raise a generation of believers that are heavenly and
            earthly-relevant.
          </p>
        </div>

        {/* Church logo and location */}
        <div className="footer-brand">
          <a href="#home" aria-label="Back to homepage">
            <img
              src="/Images/NCBC-LOGO.png"
              alt="New Covenant Baptist Church"
            />
          </a>

          <p>OFATEDO | OSOGBO | OSUN STATE, NIGERIA</p>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} New Covenant Baptist Church. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
