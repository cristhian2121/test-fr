import React, { useRef, useState } from "react";
// Material UI
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// Custom styles
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useAfterFistRendered from "../../hooks/useSecondRender";

const USERNAME = "username";
const PASSWORD = "password";

/**
 * 
 * @param text 
 * @returns Invalid -> false; Valid -> true
 */
function isValidUserFc(text: string) {
  if (!text || text.length > 50) return true;
  return false;
}

/**
 * 
 * @param text 
 * @returns Invalid -> false; Valid -> true
 */
function isValidPasswordFc(text: string) {
  if (!text || text.length > 50) return true;
  return false;
}

export default function LoginView() {
  const [isloadingButton, setIsloadingButton] = useState(true);
  const [isUserError, setIsUserError] = useState(true);
  const [isPasswordError, setIsPasswordError] = useState(true);
  const afterFirstRender = useAfterFistRendered();
  const refForm = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsloadingButton(true);

    const formData = new FormData(refForm.current as HTMLFormElement);
    const username = formData.get(USERNAME);
    const password = formData.get(PASSWORD);
    const credential = { username, password };

    setTimeout(() => {
      setIsloadingButton(false);
      console.log("credential: ", credential);
      navigate("/home");
    }, 2000);
  };

  const handleBlur = (e: React.FocusEvent) => {
    const formData = new FormData(refForm.current as HTMLFormElement);

    const username = formData.get(USERNAME) || "";
    const password = formData.get(PASSWORD) || "";
    let isValidUser = false;
    let isValidPassword = false;

    if (e.target.id === USERNAME) {
      isValidUser = isValidUserFc(username.toString());
      setIsUserError(isValidUser);
    }
    if (e.target.id === PASSWORD) {
      isValidPassword = isValidPasswordFc(password.toString());
      setIsPasswordError(isValidPassword);
    }

    if (afterFirstRender && isValidPassword && isPasswordError) {
      setIsloadingButton(false);
    }

  };


  return (
    <section className="container">
      <Card className="container--card">
        <CardHeader title="Iniciar sesión">
        </CardHeader>
        <form className="container--form" id="login-fracttal" ref={refForm}>
          <CardContent>
            <TextField
              error={isUserError}
              id={USERNAME}
              fullWidth
              margin="normal"
              name={USERNAME}
              label="Usuario"
              helperText={isUserError && "Ingresa tu usuario"}
              onBlur={handleBlur}
            />
            <TextField
              error={afterFirstRender && isPasswordError}
              fullWidth
              id={PASSWORD}
              name={PASSWORD}
              label="Contraseña"
              helperText={isPasswordError && "Ingresa tu contraseña"}
              onBlur={handleBlur}
            />
          </CardContent>
          <CardActions className="form--actions">
            <Button disabled={(isPasswordError || isUserError)} onClick={handleSubmit} variant="contained">{isloadingButton ? "Loading" : "Entrar"}</Button>
          </CardActions>
        </form>
        {isPasswordError?"pass":""}-{isUserError?"use":""}
      </Card>
    </section>
  );
}
