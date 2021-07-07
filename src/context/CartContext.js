import React, {createContext,useState} from "react";

export const CartContext = createContext();

export const CartComponentContext = props => {
    const [cart,setCart] = useState([]);

    const addItem = (item,quantity) => {
        const itemsInCart = cart.filter(producto => producto.item.id === item.id); //filtro para saber si el mismo producto está en el carrito

        if (itemsInCart.length===0 && cart.length===0) {
            //si el producto no está en el carrito y el carrito está vacio, se introduce el nuevo producto en el carrito
            
            setCart([
                {
                item: item,
                quantity: quantity
                }
            ])
        } else if (itemsInCart.length===0 && cart.length>0) {
            //si el producto no está en el carrito y el carrito tiene otros productos, se introduce el nuevo producto en el carrito seguido de los que ya estaban
            
            setCart([
                ...cart
                ,{
                item: item,
                quantity: quantity
                }
            ])
        } else {
            //si el producto está en el carrito y el carrito tiene otros productos, se cambia la cantidad de ese producto que ya se encuentra en el carrito (FALTA TERMINAR DE DESARROLLAR)
            const cartNotRepeated = cart.filter(producto => producto.item.id !== item.id);         
            const cartRepeated = cart.filter(producto => producto.item.id === item.id);
            cartRepeated[0].quantity = cartRepeated[0].quantity + quantity;

            setCart([
                ...cartNotRepeated
                ,
                cartRepeated[0]
            ])
        }
    }

    const removeItem = (itemId) => {
        const itemsNotRemove = cart.filter(producto => producto.item.id !== itemId);
        setCart(itemsNotRemove);
    }

    const clear = () => {
        setCart([]);
    }

  return <CartContext.Provider value={{ addItem,removeItem,clear,cart }}>
    {props.children}
  </CartContext.Provider>

}
