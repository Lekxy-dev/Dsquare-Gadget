"use client"

import Image from "next/image";
import { CartProductType, SelectedImgType } from "../Product/ProductDetails";

interface ProductImageProps {
    cartProduct: CartProductType,
    product: any,
    handleColorSelect: (value: SelectedImgType) => void;
}

const ProductImg: React.FC<ProductImageProps> = ({
    cartProduct,
    product,
    handleColorSelect,
}) => {
    return <div className="grid grid-cols gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        <div className="flex flex-cols items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        {product.images.map((image: SelectedImgType) => (
            <div 
              key={image.color} 
              onClick={() => handleColorSelect(image)} 
              className={`relative w-[80%] aspect-square rounded border-teal-300 ${cartProduct.slectedImg.color === image.color ? 'border-[1.5px]' : 'border-none'}`}
            >
              <Image 
                src={image.image} 
                alt={image.color} 
                fill 
                className="object-contain"
              />
            </div>
   ))}
</div>
    </div>
}

export default ProductImg;