import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const currentLocation = useLocation().pathname;
  return (
    <header className="header header_spaced">
      <Link className="header__logo" to="/">
        {/* <img src={mestoLogo} alt="Лого сайта"  /> */}
      </Link>
      <div className="header__user-menu">
        {props.loggedIn ? (
          <div></div>
        ) : currentLocation === "/sign-up" ? (
          <Link className="header__link" to="/sign-in">
            Вход
          </Link>
        ) : (
          <Link className="header__link" to="/sign-up">
            Регистрация
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
