import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {

  const navigate = useNavigate();

  const [username, setUsername] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState(false);

  function handleSubmit() {
    if (!username) {
      setErrorMessage(true);
      return;
    }

    navigate(`/stop/${username}`);
  }

  return (
      <form id="login-page-username-form">
        <label htmlFor="login-page-username">Introduce tu nombre de usuario para jugar</label>
        <input id="login-page-username" type="text" placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {errorMessage ? <span id="login-page-error-message">* Type in a username or nickname</span> : <></>}
        <button id="login-page-login-button" type="button" onClick={handleSubmit}>Entrar</button>
      </form>
  )
}

export default LoginPage;