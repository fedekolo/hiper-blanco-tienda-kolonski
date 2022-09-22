import React, { useState } from 'react';
import './InputsRegisterStyle.css';
import { TextField, Button } from '@material-ui/core';
import { InputDate } from '../InputDate/InputDate';
import Loader from "react-loader-spinner";
import { ErrorAlert } from '../../../../../components/ErrorAlert/ErrorAlert';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export const InputsRegister = ({sendUser,loaderContact}) => {
    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [document,setDocument] = useState("");
    const [password,setPassword] = useState("");
    const [date,setDate] = useState(new Date(1990,11,17));
    const [confirmPassword,setConfirmPassword] = useState("");
    const [openAlert,setOpenAlert] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    const [visibilityPassword, setVisibilityPassword] = useState(false);
    const [visibilityConfPassword, setVisibilityConfPassword] = useState(false);

    const validateEmail = (email) => {
      const re = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      return re.test(email);
    };

    const registerVerification = () => {
      return(
      name==="" ? 
        (setErrorMessage("No se ha completado el nombre"), setOpenAlert(true)) :
      surname==="" ? 
        (setErrorMessage("No se ha completado el apellido"), setOpenAlert(true)) :
      phone==="" ? 
        (setErrorMessage("No se ha completado el teléfono"), setOpenAlert(true)) : 
      email==="" ? 
        (setErrorMessage("No se ha completado el correo"), setOpenAlert(true)) : 
      validateEmail(email)===false ? 
        (setErrorMessage("El mail ingresado no es válido"), setOpenAlert(true)) : 
      document==="" ? 
        (setErrorMessage("No se ha completado el documento"), setOpenAlert(true)) : 
      document<1000000 || document>150000000 ? 
        (setErrorMessage("El número de documento ingresado no es válido"), setOpenAlert(true)) :
      password==="" ? 
        (setErrorMessage("No se ha completado la contraseña"), setOpenAlert(true)) : 
      password!==confirmPassword ? 
        (setErrorMessage("Las contraseñas no coinciden"), setOpenAlert(true)) : 
        
      (sendUser(name,surname,phone,email,date,password,document))
    )}

    return <>
        <ErrorAlert openAlert={openAlert} setOpenAlert={setOpenAlert} message={errorMessage} />
        <TextField
            className="input"
            required
            label="Nombre"
            variant="outlined"
            onChange={e => setName(e.target.value)}
        />
        <TextField
            className="input"
            required
            label="Apellido"
            variant="outlined"
            onChange={e => setSurname(e.target.value)}
        />
        <TextField
            required
            className="input"
            label="Documento"
            type="number"
            inputMode='numeric'
            variant="outlined"
            onChange={e => setDocument(e.target.value)}
        />
        <TextField
            required
            className="input"
            label="Telefono"
            type="number"
            inputMode='numeric'
            variant="outlined"
            onChange={e => setPhone(e.target.value)}
        />
        <InputDate className="input" date={date} setDate={setDate} />
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
        <TextField
            required
            className="input-password"
            label="Confirmación contraseña"
            type={visibilityConfPassword ? "text" : "password"}
            autoComplete="current-password"
            variant="outlined"
            onChange={e => setConfirmPassword(e.target.value)}
        />
        {visibilityConfPassword ? <Visibility className="icon-visibility" onClick={e => setVisibilityConfPassword(false)} /> : <VisibilityOff className="icon-visibility" onClick={e => setVisibilityConfPassword(true)} />}
        <Button onClick={e => registerVerification()} type="submit" className='btn'>
            Registrarse
            {loaderContact &&
            <Loader
            type="TailSpin"
            color="var(--color-C)"
            height={20}
            width={20}
            />
            }
        </Button>
        <Link className='btn-sesion' to={'/singin'}>Ya estas registrado? Hace click acá</Link>   
    </>
}