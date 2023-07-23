import { Controller, Body, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { UserDto } from '../users/user-dto/user.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UsersService
        ) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return await this.authService.login(req.user);
    }

    @Post('signup')
    async signUp(@Body() user: UserDto) {
        const userExist = await this.userService.findOneByEmail(user.email);
        if (userExist) {
            return "This email is already exist";
        }
        return await this.authService.create(user);
    }
}