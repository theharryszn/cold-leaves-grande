import { PORT } from "../../config";
import { listen } from "../../modules/listen";
import ProductResolver from "./product.resolver";
import Product from "./product.entity";
import { resolveProductReference } from "./product.reference";

export * from "./product.entity";
export * from "./product.resolver"

export async function init() {
    return await listen({
        name : "user",
        port : parseInt(`${PORT}`) + 2,
        orphanedTypes : [Product],
        resolvers : [ProductResolver]
    },{ __resolveReference: resolveProductReference })
}