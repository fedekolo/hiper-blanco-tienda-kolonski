import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Loader from "react-loader-spinner";
import { ErrorAlert } from '../../../../components/ErrorAlert/ErrorAlert';

export const ModalOrder = ({setOpenModal,openModal,sendOrderAction,loaderModal}) => {
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [emailRepeat,setEmailRepeat] = useState("");
    const [infoComplete,setInfoComplete] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    const [openAlert,setOpenAlert] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    name!=="" && phone!=="" && email!=="" ? setInfoComplete(true) : setInfoComplete(false)
  }, [name,phone,email]);

  const infoVerification = () => {
    return(
    email!==emailRepeat ? 
      (setErrorMessage("Los mails no coinciden"), setOpenAlert(true)) : 
      
    sendOrderAction(name,phone,email) & handleClose
  )}

  return (
    <div>
      <ErrorAlert openAlert={openAlert} setOpenAlert={setOpenAlert} message={errorMessage} />
      <Dialog open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Datos del comprador</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para finalizar la compra te pedimos por favor completar los siguientes datos.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre y apellido"
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
            id="confirm-email"
            label="Repetir mail"
            type="email"
            fullWidth
            onChange={e => setEmailRepeat(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button disabled={!infoComplete} onClick={e => infoVerification()} color="primary" type="submit">
            Enviar orden
            {loaderModal &&
            <Loader
            type="TailSpin"
            color="var(--color-C)"
            height={20}
            width={20}
          />
          }
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}