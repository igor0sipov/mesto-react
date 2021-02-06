import React from "react";
import { Redirect, Route, useRouteMatch } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import InfoTooltip from "./InfoTooltip";
import auth from "../utils/auth";

function App() {
  //============================================constants================================================
  const [currentUser, setCurrentUser] = React.useState({
    name: "User Name",
    about: "User Bio",
  });
  const [currentEmail, setCurrentEmail] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isInfoPopupOpened, setIsInfoPopupOpened] = React.useState({
    state: false,
    status: true,
  });

  const [isEditProfilePopupOpened, setEditProfilePopupOpened] = React.useState(
    false
  );
  const [isAddPlacePopupOpened, setIsAddPlacePopupOpened] = React.useState(
    false
  );
  const [isEditAvatarPopupOpened, setIsEditAvatarPopupOpened] = React.useState(
    false
  );
  const [isImagePopupOpened, setIsImagePopupOpened] = React.useState(false);
  const [isDeletePopupOpened, setIsDeletePopupOpened] = React.useState(false);
  const [currentJwt, setCurrentJwt] = React.useState("");

  function closeAllPopups() {
    setIsEditAvatarPopupOpened(false);
    setEditProfilePopupOpened(false);
    setIsAddPlacePopupOpened(false);
    setIsImagePopupOpened(false);
    setIsDeletePopupOpened(false);
    setIsInfoPopupOpened(false);
  }

  function handleOverlayClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }
    closeAllPopups();
  }

  function escClosing(e) {
    if (e.keyCode === 27) {
      closeAllPopups();
    }
  }

  function handleSignIn({ email, password }) {
    return auth.signIn({ email, password }).then((data) => {
      setCurrentJwt(data.token);
      return data;
    });
  }

  function getUser(jwt) {
    return auth.getUser(jwt).then((data) => data);
  }

  function handleSignUp({ email, password }) {
    return auth.signUp({ email, password }).then((data) => data);
  }

  // React.useEffect(() => {
  //   auth.getUser(currentJwt).then((data) => console.log(data));
  // }, [loggedIn]);
  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          currentEmail={currentEmail}
        />
        <InfoTooltip
          isOpened={isInfoPopupOpened}
          onClose={closeAllPopups}
          onOverlay={handleOverlayClick}
          escClosing={escClosing}
        />
        <Route exact path="/">
          {loggedIn ? <Redirect to="/main" /> : <Redirect to="/sign-in" />}
        </Route>
        <Route path="/sign-up">
          <Register
            onSubmit={handleSignUp}
            setIsInfoPopupOpened={setIsInfoPopupOpened}
          />
        </Route>
        <Route path="/sign-in">
          <Login
            onSubmit={handleSignIn}
            setIsInfoPopupOpened={setIsInfoPopupOpened}
            getUser={getUser}
            setCurrentEmail={setCurrentEmail}
            setLoggedIn={setLoggedIn}
          />
        </Route>
        <Route path="/main">
          <ProtectedRoute
            component={Main}
            setCurrentUser={setCurrentUser}
            loggedIn={loggedIn}
            isEditProfilePopupOpened={isEditProfilePopupOpened}
            setEditProfilePopupOpened={setEditProfilePopupOpened}
            isAddPlacePopupOpened={isAddPlacePopupOpened}
            setIsAddPlacePopupOpened={setIsAddPlacePopupOpened}
            isEditAvatarPopupOpened={isEditAvatarPopupOpened}
            setIsEditAvatarPopupOpened={setIsEditAvatarPopupOpened}
            isImagePopupOpened={isImagePopupOpened}
            setIsImagePopupOpened={setIsImagePopupOpened}
            isDeletePopupOpened={isDeletePopupOpened}
            setIsDeletePopupOpened={setIsDeletePopupOpened}
            closeAllPopups={closeAllPopups}
            handleOverlayClick={handleOverlayClick}
            escClosing={escClosing}
          />
          <Footer />
        </Route>
      </CurrentUserContext.Provider>
    </div>
  );
}
export default App;
