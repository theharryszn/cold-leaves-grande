import Product from "./product.entity";

export async function resolveProductReference(
    reference: Pick<Product, "upc">,
  ): Promise<Product | undefined> {
    const products = await Product.findOne({ upc : reference.upc })

    return products;
  }