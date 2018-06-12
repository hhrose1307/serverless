"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errror_codes_1 = require("../../shared/errror-codes");
const response_builder_1 = require("../../shared/response-builder");
class ProductController {
    constructor() {
        this.getProduct = (event, context, callback) => {
            if (!event.pathParameters || !event.pathParameters.id) {
                return response_builder_1.ResponseBuilder.badRequest(errror_codes_1.ErrorCode.MissingId, 'Please specify the product ID', callback);
            }
            if (isNaN(+event.pathParameters.id)) {
                return response_builder_1.ResponseBuilder.badRequest(errror_codes_1.ErrorCode.MissingId, 'product id must be number', callback);
            }
            const id = +event.pathParameters.id;
            //Call data from service 
            if (id > 10) {
                const product = {
                    id: 15,
                    name: 'Book',
                    price: 12.99
                };
                const result = {
                    product
                };
                return response_builder_1.ResponseBuilder.success(result, callback);
            }
            else {
                //notfound
                //forbiden
                //internal
            }
        };
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=products.controller.js.map