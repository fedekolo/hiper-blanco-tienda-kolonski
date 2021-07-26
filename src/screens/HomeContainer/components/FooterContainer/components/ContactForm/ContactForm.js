import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core';
import { contactFormStyle } from './ContactFormStyle';
import {TextField,Button} from '@material-ui/core';
import Loader from "react-loader-spinner";
import { ErrorAlert } from '../../../../../../components/ErrorAlert/ErrorAlert';

const useStyles = makeStyles((theme) => contactFormStyle(theme));

export const ContactForm = ({sendContact,loaderContact,setLoaderContact}) => {
    const classes = useStyles();
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [errorMessage,setErrorMessage] = useState("");
    const [openAlert,setOpenAlert] = useState(false);

    const contactVerification = () => {
      return(
      name==="" ? 
        (setErrorMessage("No se ha completado el nombre"), setOpenAlert(true)) :
      phone==="" ? 
        (setErrorMessage("No se ha completado el teléfono"), setOpenAlert(true)) : 
      email==="" ? 
        (setErrorMessage("No se ha completado el mail"), setOpenAlert(true)) : 
      message==="" ? 
        (setErrorMessage("No se ha completado el mensaje"), setOpenAlert(true)) : 
        
      (sendContact(name,phone,email,message), setLoaderContact(!loaderContact),document.getElementById("name").value = "",document.getElementById("phone").value = "",document.getElementById("email").value = "",document.getElementById("message").value = "")
    )}

    return <section className={classes.container}>
        <ErrorAlert openAlert={openAlert} setOpenAlert={setOpenAlert} message={errorMessage} />
        <TextField
            margin="dense"
            id="name"
            label="Nombre"
            type="text"
            fullWidth
            onChange={e => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="phone"
            label="Teléfono de contacto"
            type="number"
            fullWidth
            onChange={e => setPhone(e.target.value)}
          />
          <TextField
            margin="dense"
            id="email"
            label="Mail"
            type="email"
            fullWidth
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            id="message"
            label="Mensaje"
            type="text"
            fullWidth
            onChange={e => setMessage(e.target.value)}
          />
          <Button onClick={e => contactVerification()} color="primary" type="submit">
              Enviar contacto
              {loaderContact &&
                <Loader
                type="TailSpin"
                color="var(--color-C)"
                height={20}
                width={20}
                />
                }
          </Button>
    </section>

}