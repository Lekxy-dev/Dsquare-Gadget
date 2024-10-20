import Container from "@/app/Component/Container";

import ProductDetails from "../ProductDetails";
import { produc } from "@/Utils/Product";

interface IPrams {
    product?: string;
}
const product = ({params}: {params:IPrams}) => {
  console.log("params", params)

    return ( <div className="p-8">
        <Container>
            <ProductDetails produc= {produc} />
        </Container>
    </div> );
}
 
export default product;