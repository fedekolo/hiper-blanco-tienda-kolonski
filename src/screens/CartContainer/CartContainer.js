import { makeStyles } from '@material-ui/core';
import { cartContainerStyle } from './CartContainerStyle';
import { CartList } from './components/CartList/CartList';
import { dataBase } from '../../Firebase/firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Loader from "react-loader-spinner";
import React,{useState} from 'react';

const useStyles = makeStyles((theme) => cartContainerStyle(theme));

export const CartContainer = () => {
    const classes = useStyles();
    const [loader,setLoader] = useState(false);

    const sendOrder = (name,phone,email,cart,price) => {

        setLoader(true);
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
            alert(`Compra realizada con éxito. Tu id es: ${doc.id}`)
        }))

        .catch(err => {
            console.log(err);
        }).finally(() => {
            setLoader(false);
        })
    
    }

     return <section className={classes.container}>
         <CartList sendOrder={sendOrder} />
         {loader &&
            <Loader
            type="TailSpin"
            color="var(--color-C)"
            height={100}
            width={100}
        />
        }
     </section>
}
