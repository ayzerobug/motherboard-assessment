import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import * as argon from 'argon2'
import { UserReadableException } from 'src/common/expections';


@Injectable()
export class TransactionPinGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<true> {
        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (!user.transactionPin)
            throw new UserReadableException("This request requires a transaction pin and user doesn't have a transaction pin. Please set it first")

        if (!request.body.transactionPin) {
            throw new BadRequestException("Transaction Pin is required");
        }

        if (await argon.verify(user.transactionPin, `${request.body.transactionPin}`)) {
            return true;
        }

        throw new UserReadableException('Invalid transaction pin');
    }
}