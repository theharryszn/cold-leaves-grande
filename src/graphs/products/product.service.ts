import { Service } from "typedi";
import Product from "./product.entity";

@Service()
export default class ProductService {
    async products() : Promise<Product[]> {
        return await Product.find({})
    }
}