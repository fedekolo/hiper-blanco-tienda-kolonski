import React, {createContext,useState} from "react";

export const CartContext = createContext();

export const CartComponentContext = props => {
    const [cart,setCart] = useState([]);
    const [isInCart,setIsInCart] = useState();

    const addItem = (item,quantity) => {
        const itemsInCart = cart.filter(producto => producto.id === item[0].id);
        itemsInCart==null ? setIsInCart(false) : setIsInCart(true);

        if (isInCart) {
            cart.filter(producto => producto.id === item[0].id).quantity = cart.filter(producto => producto.id === item[0].id).quantity + quantity;
            setCart([cart]);
        } else {
            setCart([
                {...cart}
                ,{
                item: item,
                quantity: quantity
                }
            ])
        }
        console.log(isInCart)
        console.log(itemsInCart)
        console.log(cart)

    }

    const removeItem = (itemId) => {
        const itemsNotRemove = cart.filter(producto => producto.item.id === !itemId);
        setCart([itemsNotRemove]);
    }

    const clear = () => {
        setCart([]);
    }

  return <CartContext.Provider value={{ addItem,removeItem,clear,cart }}>
    {props.children}
  </CartContext.Provider>

}