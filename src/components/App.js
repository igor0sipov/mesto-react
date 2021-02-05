import React from "react";
import { Redirect, Route, useRouteMatch } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  //============================================constants================================================
  const [currentUser, setCurrentUser] = React.useState({
    name: "User Name",
    about: "User Bio",
  });
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} />

        <Route exact path="/">
          {loggedIn ? <Redirect to="/main" /> : <Redirect to="/sign-in" />}
        </Route>
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="/sign-in">
          <Login />
        </Route>
        <Route path="/main">
          <ProtectedRoute
            component={Main}
            setCurrentUser={setCurrentUser}
            loggedIn={loggedIn}
          />
          <Footer />
        </Route>
      </CurrentUserContext.Provider>
    </div>
  );
}
export default App;
