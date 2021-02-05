import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="auth sizer">
      <h1 className="auth__type">Регистрация</h1>
      <form className="auth__form">
        <input className="auth__input" type="email  " placeholder="Email" />
        <input
          className="auth__input"
          type="password"
          placeholder="Пароль"
          autoComplete="on"
        />
        <button className="auth__button button">Зарегистрироваться</button>
      </form>
      <Link className="auth__link" to="/sign-in">
        Уже зарегистрированы? Войти
      </Link>
    </section>
  );
}

export default Register;
