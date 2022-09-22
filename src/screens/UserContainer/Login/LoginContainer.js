import React, { useEffect, useState } from 'react';
import './LoginStyle.css';
import Axios from "axios";
import Swal from 'sweetalert2';
import { ErrorAlert } from '../../../components/ErrorAlert/ErrorAlert';
import { InputsLogin } from './components/InputsLogin/InputsLogin';

export const LoginContainer = () => {
    const [loaderContact,setLoaderContact] = useState(false);
    const [loginResult,setLoginResult] = useState();
    const [errorMessage,setErrorMessage] = useState("");
    const [openAlert,setOpenAlert] = useState(false);

    useEffect(() => {
      if (loginResult===false) {
        setErrorMessage("Usuario y/o contraseña incorrectos");
        setOpenAlert(true);
        setLoginResult();
      }
      loginResult && Swal.fire({
        position: 'top',
        icon: 'success',
        title: `Bienvenido/a ${loginResult.nombre}!`,
        showConfirmButton: false,
        timer: 2000
      }).then(() => {
        window.location.replace("/");
      })
    }, [loginResult]);
    
    const sendUser = (email,password) => {
      setLoaderContact(true);
        Axios({
            method: "POST",
            data: {
              correo: email,
              contrasena: password
            },
            withCredentials: true,
            url: "http://localhost:8080/usuarios/iniciosesion",
          }).then(setLoaderContact(false))
          .then((res) => setLoginResult(res.data))
          .catch(err => console.log(err))
    }

    return <section className='login-container'>
        <h1>Inicio de Sesión</h1>
        <InputsLogin sendUser={sendUser} loaderContact={loaderContact} />
        <ErrorAlert openAlert={openAlert} setOpenAlert={setOpenAlert} message={errorMessage} />
    </section>
}
