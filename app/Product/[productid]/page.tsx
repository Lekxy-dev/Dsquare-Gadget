import Container from "@/app/Component/Container";

import ProductDetails from "../ProductDetails";
import { produc } from "@/Utils/Product";
import ListRating from "./ListRating";

interface IPrams {
    product?: string;
}
const product = ({params}: {params:IPrams}) => {
  console.log("params", params)

    return ( <div className="p-8">
        <Container>
            <ProductDetails produc= {produc} />
            <div className="flex flex-col mt-20 gap-4">
                <div>Add Rating</div>
                <ListRating product={produc}/>
            </div>
        </Container>
    </div> );
}
 
export default product;