import { ProductController } from "./products.controller";
import { ApiHandler } from "../../shared/api.interface";

const controller = new ProductController();

export const getProduct: ApiHandler = controller.getProduct;