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

const USERNAME = "username";
const PASSWORD = "password";

function validateUser(text: string) {
  if(!text || text.length > 50) return false;
  return true;
}

function validatePassword(text: string) {
  if(!text || text.length > 50) return false;
  return true;
}

export default function LoginView() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isUserError, setIsUserError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const refForm = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSubmit(true);
    setTimeout(() => {
      navigate("/home");
    },2000);
  };

  const handleBlur = (e: React.FocusEvent) => {
    if(!refForm.current) return;

    const formData = new FormData(refForm.current);

    const username = formData.get(USERNAME) || "";
    if (e.target.id === USERNAME) {
      validateUser(username.toString()) ? setIsUserError(false) : setIsUserError(true);
      return;
    }

    const password = formData.get(PASSWORD) || "";
    if (e.target.id === PASSWORD) {
      validatePassword(password.toString()) ? setIsPasswordError(false) : setIsPasswordError(true);
      return;
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
              error={isPasswordError}
              fullWidth
              id={PASSWORD}
              name={PASSWORD}
              label="Contraseña"
              helperText={isPasswordError && "Ingresa tu contraseña"}
              onBlur={handleBlur}
            />
          </CardContent>
          <CardActions className="form--actions">
            <Button disabled={isSubmit} onClick={handleSubmit} variant="contained">Entrar</Button>
          </CardActions>
        </form>
      </Card>
    </section>
  );
}
