import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';


export interface HttpExceptionResponse {
  statusCode: number;
  message: any;
  error: string;
}

@Catch()
export class AppExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    let message: string;
    let status: number;

    if (exception instanceof HttpException) {
      const response = exception.getResponse() as HttpExceptionResponse;
      const msgFromArray = response.message instanceof Array ? response.message[0] : response.message;
      status = exception.getStatus();
      message = msgFromArray || exception.message;
    } else {
      console.log(exception);
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = "Internal Server Error"
    }

    response.status(status).json({
      success: false,
      message,
    });
  }
}
