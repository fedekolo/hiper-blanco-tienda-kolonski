import React, { useState } from 'react';
import './InputsLoginStyle.css';
import { TextField, Button } from '@material-ui/core';
import Loader from "react-loader-spinner";
import { ErrorAlert } from '../../../../../components/ErrorAlert/ErrorAlert';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export const InputsLogin = ({sendUser,loaderContact}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [openAlert,setOpenAlert] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    const [visibilityPassword, setVisibilityPassword] = useState(false);

    const loginVerification = () => {
      return(
      email==="" ? 
        (setErrorMessage("No se ha completado el correo"), setOpenAlert(true)) : 
      password==="" ? 
        (setErrorMessage("No se ha completado la contraseña"), setOpenAlert(true)) : 
                
      (sendUser(email,password))
    )}

    return <>
        <ErrorAlert openAlert={openAlert} setOpenAlert={setOpenAlert} message={errorMessage} />
        <TextField
            required
            className="input"
            label="Correo"
            type="mail"
            inputMode='email'
            variant="outlined"
            onChange={e => setEmail(e.target.value)}
        />
        <TextField
            required
            className="input-password"
            label="Contraseña"
            type={visibilityPassword ? "text" : "password"}
            autoComplete="current-password"
            variant="outlined"
            onChange={e => setPassword(e.target.value)}
        />
        {visibilityPassword ? <Visibility className="icon-visibility" onClick={e => setVisibilityPassword(false)} /> : <VisibilityOff className="icon-visibility" onClick={e => setVisibilityPassword(true)} />}
        <Button onClick={e => loginVerification()} type="submit" className='btn'>
            Iniciar Sesión
            {loaderContact &&
            <Loader
            type="TailSpin"
            color="var(--color-C)"
            height={20}
            width={20}
            />
            }
        </Button>
        <Link className='btn-registro' to={'/singup'}>No estas registrado? Hace click acá</Link>     
    </>
}