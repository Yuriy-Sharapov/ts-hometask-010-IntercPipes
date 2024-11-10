import { CallHandler, ExecutionContext, HttpException, Injectable, InternalServerErrorException, NestInterceptor } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { catchError, map, Observable, tap, throwError } from "rxjs";


// Класс перехватчика
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    constructor (private readonly reflector: Reflector) {}

    public intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next
            .handle()
            .pipe(
                map( res => {
                    return {
                        status: "success",
                        data: res // данные из контроллера
                    }
                }),
                catchError(err => {
                    return throwError(() => {   
                        const msg = {
                            status: "fail",
                            data: `${err}` // сведения об ошибке
                            //data: err.stack // сведения об ошибке                            
                        }
                        //console.log(msg) 
                        return new InternalServerErrorException(msg)
                    });
                })                
            )
    }
}