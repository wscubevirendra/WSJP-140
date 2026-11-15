import React, { createContext, useEffect, useState } from 'react'
const storeContext = createContext();

export default function Context({ children }) {
    const [cart, setCart] = useState([]);

    useEffect(
        () => {
            const lscart = JSON.parse(localStorage.getItem("cart"));
            if (lscart) {
                setCart(lscart)
            }
        },
        []
    )


    useEffect(
        () => {
            localStorage.setItem("cart", JSON.stringify(cart));
        },
        [cart]
    )

    function addToCart(product) {
        const item = cart.find((data) => data.id == product.id);
        if (item) {
            //qty increase
            const updateCart = cart.map((data) => {
                return data.id == item.id ? { ...data, qty: data.qty + 1 } : data
            })
            setCart(updateCart);
        } else {
            //update cart state directly
            setCart([...cart, product]);
        }
    }


    function increaseQty(id) {
        const item = cart.find((product) => product.id == id);
        if (item) {
            const updateCart = cart.map((data) => {
                return data.id == item.id ? { ...data, qty: data.qty + 1 } : data
            })
            setCart(updateCart);
        }

    }


    function decreaseQty(id) {
        const item = cart.find((product) => product.id == id);
        if (item) {
            const updateCart = cart.map((data) => {
                return data.id == item.id ? { ...data, qty: data.qty - 1 } : data
            })
            setCart(updateCart);
        }
    }

    function clearCart() {
        setCart([])
    }

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    const removeItem = (id) => {
        const item = cart.find((product) => product.id == id);
        if (item) {
            const updateCart = cart.filter((product) => product.id !== id)
            setCart(updateCart)
        }
    }


    return (
        <storeContext.Provider value={{ cart, addToCart, clearCart, decreaseQty, increaseQty, total,removeItem }}>
            {children}
        </storeContext.Provider>
    )
}

export { storeContext } //named export
