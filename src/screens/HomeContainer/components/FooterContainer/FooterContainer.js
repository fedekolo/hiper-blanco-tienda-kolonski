import { makeStyles } from '@material-ui/core';
import { footerContainerStyle } from './FooterContainerStyle';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactInfo } from './components/ContactInfo/ContactInfo';
import Divider from '@material-ui/core/Divider';
import { dataBase } from '../../../../Firebase/firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import React,{useState} from 'react';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => footerContainerStyle(theme));

export const FooterContainer = () => {
    const classes = useStyles();
    const [loaderContact,setLoaderContact] = useState(false);

    const sendContact = (name,phone,email,message) => {

        setLoaderContact(true);
        const contacts = dataBase.collection('contacts').doc();
        const newContact = {
            name: name,
            phone: phone,
            email: email,
            message: message,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
        };
    
        contacts.set(newContact)
        .then(

        )
        .catch(err => {
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Error en el envio del contacto. Intentar nuevamente mas tarde.',
                showConfirmButton: false,
                timer: 1500
              })
            console.log(err)
        }).finally(() => {
            setLoaderContact(false);
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Contacto enviado con éxito',
                showConfirmButton: false,
                timer: 1500
              })
        })
    
    }

    return <footer className={classes.container} id={'footer'}>
        <ContactForm sendContact={sendContact} loaderContact={loaderContact} setLoaderContact={setLoaderContact} />
        <Divider
            orientation="vertical"
            flexItem={true}
        />
        <ContactInfo />
    </footer>

};