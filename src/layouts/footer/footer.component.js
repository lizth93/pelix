import Logo from "../brand/logo.component";
import ContactMe from "./contact-me";
const Footer = (props) => {
  return (
    <footer className={props.className}>
      <div className="grid--4-cols">
        <div className="logo-name">
          <Logo />
          Pelix
        </div>
        <div>
          <h2>About Me</h2>
          <p className="text">Front-end developer</p>
        </div>
        <div>
          <h2>Services</h2>
          <p className="text">
            JavaScript, CSS, SCSS,HTML,React, Redux,Git, Bootstrap
          </p>
        </div>
        <div>
          <h2>Contact me</h2>
          <ContactMe />
        </div>
        <p className="copyrigth">
          This website is handmade by Luz Edith Tobar ❤ with JavaScript, REACT,
          Redux, html, CSS, SCSS and Bootstrap, Check the code of this website
          on GitHub.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
