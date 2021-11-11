import { Query, Resolver } from "type-graphql";
import { Service, Inject } from "typedi";
import Product from "./product.entity";
import ProductService from "./product.service";

@Service()
@Resolver(Product)
class ProductResolver {

    @Inject()
    productService: ProductService;

    @Query(() => [Product])
    async products(){
        await this.productService.products();
    }
}

export default ProductResolver;