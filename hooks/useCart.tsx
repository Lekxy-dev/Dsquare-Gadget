import { CartProductType } from "@/app/Product/ProductDetails";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

type CartContextType = {
    cartTotalQty: number;
    cartPs: CartProductType[];
    handleAddProductToCart: (product: CartProductType) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
    [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(10);
    const [cartPs, setCartProducts] = useState<CartProductType[]>([]); // Initialize as an empty array

    useEffect(() => {
        const cartItems: any = localStorage.getItem('dSquareCartItem');
        const cPs: CartProductType[] = JSON.parse(cartItems) || []; // Default to an empty array if null
        setCartProducts(cPs);
    }, []);

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            const updatedCart = [...prev, product]; // Always create a new array
            localStorage.setItem('dSquareCartItem', JSON.stringify(updatedCart));
            return updatedCart;
        });
    }, []);

    const value = {   
        cartTotalQty,
        cartPs,
        handleAddProductToCart,
    };

    return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (context === null) {
        throw new Error("useCart must be used within a CartContextProvider");
    }

    return context;
};
