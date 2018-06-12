import { ApiCallback, ApiResponse, ErrorResponseBody } from './api.interface';
import { ErrorCode } from './errror-codes';
import { BadRequestResult, ErrorResult, NotFoundResult, InternalServerErrorResult } from './errors';
import { HttpStatusCode } from './http-status-code';

export  class ResponseBuilder {
    private static _returnAs<T>( result: T, statusCode: number, callback: ApiCallback ): void {
        const bodyObject: ErrorResponseBody | T = result instanceof ErrorResult
                                                    ? { error: result }
                                                    : result;
        const response: ApiResponse = {
            statusCode,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(bodyObject)
        };
        callback(null, response);
    }
    public static badRequest( code: string, description: string, callback: ApiCallback ): void {
        const errorResult: BadRequestResult = new BadRequestResult( code, description );
        ResponseBuilder._returnAs<BadRequestResult>( errorResult, HttpStatusCode.BadRequest, callback );
    }

    public static internalServerError( error: Error, callback: ApiCallback ): void {
        const errorResult: InternalServerErrorResult = new InternalServerErrorResult(ErrorCode.GeneralError, 'You cannot...');
        ResponseBuilder._returnAs<InternalServerErrorResult>( errorResult, HttpStatusCode.InternalServerError, callback );
    }

    public static notFound( code: string, description: string, callback: ApiCallback): void {
        const errorResult: NotFoundResult = new NotFoundResult( code, description );
        ResponseBuilder._returnAs<NotFoundResult>( errorResult, HttpStatusCode.NotFound, callback );
    }

    public static success<T>( result: T, callback: ApiCallback): void {
        ResponseBuilder._returnAs<T>( result, HttpStatusCode.Success, callback );
    }
}