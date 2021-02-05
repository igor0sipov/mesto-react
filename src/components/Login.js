function Login() {
  return (
    <section className="auth sizer">
      <h1 className="auth__type">Вход</h1>
      <form className="auth__form">
        <input className="auth__input" type="email  " placeholder="Email"/>
        <input className="auth__input" type="password" placeholder="Пароль" autoComplete="on"/>
        <button className="auth__button button">Войти</button>
      </form>
    </section>
  );
}

export default Login;
