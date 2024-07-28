import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor() {
    super('forbidden exception', HttpStatus.FORBIDDEN);
  }
}
