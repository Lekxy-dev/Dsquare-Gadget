"use client"

import { Rating } from "@mui/material";
import { useState } from "react";

interface ProductDetailsProps{
    produc: any
}

export type CartProductType = {
    id:string,
    name:string,
    description: string,
    category: string,
    brand: string,
    slectedImg: SelectedImgType,
    quantity:number,
    price:number
}

export type SelectedImgType = {
    color: string,
    colorCode: string,
    image: string
}

const Horizontal = () =>{
    return <hr className="w-[30% ] my-2"/ >
};
const ProductDetails:React.FC<ProductDetailsProps> = ({produc}) => {

    const [CartProduct, setCartProduct] = useState<CartProductType>({
        id:produc.id,
        name:produc.name,
        description: produc.description,
        category: produc.category,
        brand: produc.brand,
        slectedImg: {...produc.images[0]},
        quantity:1,
        price:produc.price,
    })
    const productRating = produc.reviews.reduce((acc:number,item:any) => item.rating + acc, 0) / produc.reviews.length
    console.log(productRating)
    return ( <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div>Images</div>
    <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{produc.name}</h2>
        <div className="flex items-center gap-2">
            <Rating value={productRating} readOnly/>
            <div>{produc.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{produc.description}</div>
        <Horizontal />
        <div>
            <span className="font-semibold">CATEGORY:</span>
            {produc.category}
        </div>
        <div>
            <span className="font-semibold">BRAND:</span>
            {produc.brand}
        </div>
        <div className={produc.inStock? 'text-teal-400' : 'text-rose-400'}>{produc.inStock? 'In stock' : 'Out of stock'}
        </div>
        <Horizontal />
        <div>Color</div>
        <Horizontal />
        <div>quantity</div>
        <Horizontal />
        <div>add to cart</div>
    </div>
    </div> );
}
 
export default ProductDetails;