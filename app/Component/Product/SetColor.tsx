"use client"

import { CartProductType, SelectedImgType } from "@/app/Product/ProductDetails";

interface SetColorProps{
    images: SelectedImgType[],
    cartProduct:CartProductType,
    handlColorSelect:(value: SelectedImgType) => void;
}

const SetColor:React.FC<SetColorProps> = ({
    images,
    cartProduct,
    handlColorSelect
}) => {
    return ( <div>
        <div className="flex gap-4 items-center">
            <span className="font-semibold">COLOR:</span>
            <div className="flex gap-1">{
                 images.map((image) => {
                    return <div 
                    key={image.color}
                    onClick={() => handlColorSelect(image)}
                    className={`h-7 w-7 rounded-full border-teal-300 flex items-center justify-center ${
                        cartProduct.slectedImg.color === image.color ? 'border-[1.5px]': 'border-none'
                    }`}>
                        <div style={{background: image.colorCode}} className="h-5 w-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer"></div>
                    </div>
                 })
                }</div>
        </div>
    </div> );
}
 
export default SetColor;