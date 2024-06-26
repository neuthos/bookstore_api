import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { DataResponse, HttpSuccessResponse } from 'src/shared/interfaces';

// Re-format all non-error response to fit Google JSON style
@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, HttpSuccessResponse<T>>
{
  intercept(
    _context: ExecutionContext,
    next: CallHandler,
  ): Observable<HttpSuccessResponse<T>> {
    return next.handle().pipe(
      map((res: DataResponse) => {
        return {
          success: true,
          status: 200,
          msg: res?.msg ?? 'Succeded',
          data: res?.data ? res.data : res,
        };
      }),
    );
  }
}
