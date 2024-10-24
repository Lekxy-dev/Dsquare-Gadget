import { CartProductType } from "@/app/Product/ProductDetails";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

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
    const [cartTotalQty, setCartTotalQty] = useState(0);
    const [cartPs, setCartProducts] = useState<CartProductType[]>([]);

    // Fetch cart products from localStorage on initial load
    useEffect(() => {
        const cartItems = localStorage.getItem('dSquareCartItem');
        const parsedCart: CartProductType[] = cartItems ? JSON.parse(cartItems) : [];
        setCartProducts(parsedCart);
        setCartTotalQty(parsedCart.reduce((total, product) => total + product.quantity, 0));
    }, []);

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prevCart) => {
            const updatedCart = prevCart ? [...prevCart, product] : [product];
            toast.success("Product added to cart");
            localStorage.setItem('dSquareCartItem', JSON.stringify(updatedCart));
            

            // Update the total quantity of items in the cart
            const totalQty = updatedCart.reduce((total, product) => total + product.quantity, 0);
            setCartTotalQty(totalQty);

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
