import React, {createContext,useState} from "react";

export const CartContext = createContext();

export const CartComponentContext = props => {
    const [cart,setCart] = useState([
        {
            id: "1",
            catId: "9",
            title: "Almohada",
            description: "Comoda como ninguna",
            price: "$800",
            colors: ["blanco","terracota"],
            pictureUrl: "https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/1/2/12652.jpg"
        },
        {
            id: "2",
            catId: "1",
            title: "Sabana",
            description: "Muy linda y suave",
            price: "$4500",
            colors: ["blanco","terracota"],
            pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_798312-MLA41192767859_032020-V.jpg"
        },
        {
            id: "3",
            catId: "2",
            title: "Acolchado",
            description: "Es hermoso y pachoncito",
            price: "$5200",
            colors: ["blanco","terracota"],
            pictureUrl: "https://arredo.vteximg.com.br/arquivos/ids/206004-1000-1000/20021U02022-AP_0.jpg"
        }
    ]);
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
