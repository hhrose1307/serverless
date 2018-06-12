import { ApiCallback, ApiContext, ApiEvent, ApiHandler } from '../../shared/api.interface';
import { ErrorCode } from '../../shared/errror-codes';
// import { ErrorResult, NotFoundResult} from '../../shared/errors';
import { GetProductResult, Product } from'./products.interface';
import { ResponseBuilder } from '../../shared/response-builder';
import { ErrorResult } from '../../shared/errors';

export class ProductController {
    public constructor() {}

    public getProduct: ApiHandler = ( event: ApiEvent, context: ApiContext, callback: ApiCallback ) => {
        if( !event.pathParameters || !event.pathParameters.id ) {
            return ResponseBuilder.badRequest(ErrorCode.MissingId, 'Please specify the product ID', callback );
        }

        if( isNaN( +event.pathParameters.id )) {
            return ResponseBuilder.badRequest(ErrorCode.MissingId, 'product id must be number', callback);
        }

        const id = +event.pathParameters.id; 

        //Call data from service 

        if( id > 10 ) {
            const product: Product = {
                id: 15,
                name: 'Book',
                price: 12.99
            }
            const result: GetProductResult = {
                product
            }
            return ResponseBuilder.success<GetProductResult>(result, callback);
        }
        else {
            //notfound
            //internal

        }
    }
}
