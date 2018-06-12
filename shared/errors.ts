export abstract class ErrorResult extends Error  {
    public constructor( public code: string, public description: string ) {
        super(description);
    }
}

export class BadRequestResult extends ErrorResult {}

export class NotFoundResult extends ErrorResult {}

export class InternalServerErrorResult extends ErrorResult {}