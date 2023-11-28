
import { JwtGuard } from "../auth/guard";
import { AppService } from "./app.service";
import { GetUser } from "../auth/decorator";
import { User } from "src/modules/core_modules/user/entities";
import { Controller, Get, UseGuards } from "@nestjs/common";

@Controller('app')
@UseGuards(JwtGuard)
export class AppController {}
