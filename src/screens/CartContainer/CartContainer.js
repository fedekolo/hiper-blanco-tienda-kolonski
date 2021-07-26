import { makeStyles } from '@material-ui/core';
import { cartContainerStyle } from './CartContainerStyle';
import { CartList } from './components/CartList/CartList';
import { dataBase } from '../../Firebase/firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import React,{useState} from 'react';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => cartContainerStyle(theme));

export const CartContainer = () => {
    const classes = useStyles();
    const [loaderModal,setLoaderModal] = useState(false);

    const sendOrder = (name,phone,email,cart,price) => {

        setLoaderModal(true);
        const orders = dataBase.collection('orders').doc();
        const newOrder = {
            buyer: {
                name: name,
                phone: phone,
                email: email
            },
            items: cart, 
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            price: price
        };
    
        orders.set(newOrder).then(orders.get().then((doc) => {
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: `Compra realizada con éxito. Tu id es: ${doc.id}`,
                showConfirmButton: true,
                confirmButtonText: 'Confirmar',
                confirmButtonColor: 'var(--color-C)'
              })
        }))

        .catch(err => {
            console.log(err);
        }).finally(() => {
            setLoaderModal(false);
        })
    
    }

     return <section className={classes.container}>
         <CartList sendOrder={sendOrder} loaderModal={loaderModal} />
     </section>
}
