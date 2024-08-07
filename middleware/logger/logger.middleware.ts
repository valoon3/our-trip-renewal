import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('http'); // HTTP(context)의 역할 -> HTTP 관련된 요청에서만 logger 가 실행 됨 , express 의 debug 라이브러리와 같은 역할

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = request;
    const userAgent = request.get('user-agent') || ''; // header 에서 가져옴

    // 응답이 끝났을 때
    response.on('finish', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');
      this.logger.log(`${method} ${originalUrl} ${statusCode} - ${userAgent} ip${ip} ${contentLength}`);
    });

    next();
  }
}
