import logo from "./logo-icon.png";
const Logo = (props) => {
  return (
    <a className={props.className} href="/">
      <div className="header__logo-box">
        <img className="header__logo" src={logo} alt="Logo stickers" />
      </div>
    </a>
  );
};

export default Logo;
