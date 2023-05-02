import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersController } from "./users.controller";
import { UserService } from "./users.service";
import { User } from "src/users/entities/user.entity";

@Module({
    imports:[TypeOrmModule.forFeature([User])], // 생성한 Entity를 넣어준다
    controllers: [UsersController],
    providers: [UserService],
})
export class UsersModule {}