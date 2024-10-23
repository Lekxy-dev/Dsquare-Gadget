import { CartProductType } from "@/app/Product/ProductDetails";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
type CartContextType = {
    cartTotalQty: number;
    cartPs: CartProductType[];
    handleAddProductToCart: (product: CartProductType) => void
}

export const CartContext = createContext<CartContextType | null>(null);
interface Props {
    [propName:string]:any
}
export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(10);
    const [cartPs,setCartProducts] = useState<CartProductType[] | null>(null)

    useEffect(() => {
        const cartItems: any = localStorage.getItem('dSquareCartItem')
       const cPs: CartProductType[] | null = JSON.parse(cartItems)
       setCartProducts(cPs)
    }, [])
   const handleAddProductToCart = useCallback((product:CartProductType) => {
      setCartProducts((prev) => {
         let updatedCart;
         if (prev) {
            updatedCart = [...prev, product];

         }else {
            updatedCart = [product];
         }
         localStorage.setItem('dSquareCartItem',JSON.stringify(updatedCart))
         return updatedCart;
      })
   }, []);
   
    const value = {   
        cartTotalQty,
        cartPs,
        handleAddProductToCart
    }
    return <CartContext.Provider value={value} {... props}/>
};

export const useCart = () => {
    const context = useContext(CartContext);

    if(context === null) {
        throw new Error ("useCart must be used within a CartContextProvider")
    }

    return context
}