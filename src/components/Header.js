import mestoLogo from "../images/logo_white.svg";

function Header() {
  return (
    <header className="header header_spaced">
      <a href="#">
        <img src={mestoLogo} alt="Лого сайта" className="header__logo" />
      </a>
    </header>
  );
}

export default Header;
