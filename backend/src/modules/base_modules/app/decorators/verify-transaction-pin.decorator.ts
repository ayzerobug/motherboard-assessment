import { UseGuards } from '@nestjs/common';
import { TransactionPinGuard } from '../guards';

export const VerifyTransactionPin = () => UseGuards(TransactionPinGuard)