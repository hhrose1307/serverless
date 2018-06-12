"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorResult extends Error {
    constructor(code, description) {
        super(description);
        this.code = code;
        this.description = description;
    }
}
exports.ErrorResult = ErrorResult;
class BadRequestResult extends ErrorResult {
}
exports.BadRequestResult = BadRequestResult;
class NotFoundResult extends ErrorResult {
}
exports.NotFoundResult = NotFoundResult;
class InternalServerErrorResult extends ErrorResult {
}
exports.InternalServerErrorResult = InternalServerErrorResult;
//# sourceMappingURL=errors.js.map