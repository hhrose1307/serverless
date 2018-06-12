"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errror_codes_1 = require("./errror-codes");
const errors_1 = require("./errors");
const http_status_code_1 = require("./http-status-code");
class ResponseBuilder {
    static _returnAs(result, statusCode, callback) {
        const bodyObject = result instanceof errors_1.ErrorResult
            ? { error: result }
            : result;
        const response = {
            statusCode,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(bodyObject)
        };
        callback(null, response);
    }
    static badRequest(code, description, callback) {
        const errorResult = new errors_1.BadRequestResult(code, description);
        ResponseBuilder._returnAs(errorResult, http_status_code_1.HttpStatusCode.BadRequest, callback);
    }
    static internalServerError(error, callback) {
        const errorResult = new errors_1.InternalServerErrorResult(errror_codes_1.ErrorCode.GeneralError, 'You cannot...');
        ResponseBuilder._returnAs(errorResult, http_status_code_1.HttpStatusCode.InternalServerError, callback);
    }
    static notFound(code, description, callback) {
        const errorResult = new errors_1.NotFoundResult(code, description);
        ResponseBuilder._returnAs(errorResult, http_status_code_1.HttpStatusCode.NotFound, callback);
    }
    static success(result, callback) {
        ResponseBuilder._returnAs(result, http_status_code_1.HttpStatusCode.Success, callback);
    }
}
exports.ResponseBuilder = ResponseBuilder;
//# sourceMappingURL=response-builder.js.map