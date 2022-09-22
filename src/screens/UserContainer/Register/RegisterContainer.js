import React, { useEffect, useState } from 'react';
import './RegisterStyle.css';
import { InputsRegister } from './components/InputsRegister/InputsRegister';
import Axios from "axios";
import Swal from 'sweetalert2';
import { ErrorAlert } from '../../../components/ErrorAlert/ErrorAlert';

export const RegisterContainer = () => {
    const [loaderContact,setLoaderContact] = useState(false);
    const [registerResult,setRegisterResult] = useState();
    const [errorMessage,setErrorMessage] = useState("");
    const [openAlert,setOpenAlert] = useState(false);

    useEffect(() => {
      if (registerResult===false) {
        setErrorMessage("El correo ingresado ya está registrado")
        setOpenAlert(true)
      }
      registerResult && Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Usuario registrado con éxito',
        showConfirmButton: false,
        timer: 2000
      }).then(() => {
        window.location.replace("/");
      })
    }, [registerResult]);
    
    const sendUser = (name,surname,phone,email,date,password,document) => {
      setLoaderContact(true);
        Axios({
            method: "POST",
            data: {
              nombre: name,
              apellido: surname,
              telefono: phone,
              correo: email,
              documento: document,
              fechaNacimiento: date,
              contrasena: password
            },
            withCredentials: true,
            url: "http://localhost:8080/usuarios/registro",
          }).then(setLoaderContact(false))
          .then((res) => setRegisterResult(res.data))
          .catch(err => console.log(err))
    }

    return <section className='register-container'>
        <h1>Formulario de Registro</h1>
        <InputsRegister sendUser={sendUser} loaderContact={loaderContact} />
        <ErrorAlert openAlert={openAlert} setOpenAlert={setOpenAlert} message={errorMessage} />
    </section>
}
