import { ArgumentsHost, ExceptionFilter, HttpException, Catch } from "@nestjs/common";
import { Request, Response } from "express";
import path from "path";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        const request = ctx.getRequest<Request>()
        let status = exception.getStatus()

        // В случае отсутствия, по умолчанию code = 500
        if (!exception.hasOwnProperty("status") || status === 0){
            status = 500
        }
        const err = {
            text : exception.getResponse(),
            stack: exception.stack
        }
        response
            .status(status)
            .json({
                timestamp: new Date().toISOString(),
                status   : 'fail',
                data     : err,
                code     : status, 
                path     : request.url
            })

    }
}