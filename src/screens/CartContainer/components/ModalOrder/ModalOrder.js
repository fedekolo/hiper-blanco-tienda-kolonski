import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const ModalOrder = ({setOpenModal,openModal,sendOrderAction}) => {
    const [name,setName] = useState();
    const [phone,setPhone] = useState();
    const [email,setEmail] = useState();

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={e => sendOrderAction(name,phone,email) & handleClose} color="primary">
            Enviar orden
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}