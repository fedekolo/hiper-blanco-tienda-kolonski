import { makeStyles } from '@material-ui/core';
import { contactInfoStyle } from './ContactInfoStyle';
import {WhatsApp,Instagram,Mail} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => contactInfoStyle(theme));

export const ContactInfo = () => {
    const classes = useStyles();

    return <section className={classes.container}>
        <div>
            <Link to={{ pathname: 'https://api.whatsapp.com/send?phone=1158077808&text=Hola!%20Estoy%20interesado%20en%20un%20producto%20de%20Hiper%20Blanco.%20Espero%20su%20respuesta!' }} target="_blank">
                <WhatsApp className={classes.btn} />
            </Link>
            <Link to={{ pathname: 'https://www.instagram.com/hiperblancorecoleta/'}} target="_blank">
                <Instagram className={classes.btn} />
            </Link>
            <Link to={{ pathname: 'mailto:hbrecoleta@gmail.com?subject=Contacto%20pagina'}} target="_blank">
                <Mail className={classes.btn} />
            </Link>
        </div>
        <iframe title="Mapa ubicación de local" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3342694157886!2d-58.39285568492!3d-34.59570798046158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabe9a0b01a7%3A0xcc895d4d73f11782!2sAv.%20Santa%20Fe%201633%2C%20C1060%20ABC%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1626735379890!5m2!1ses-419!2sar" allowFullScreen="" loading="lazy"></iframe>
    </section>

};