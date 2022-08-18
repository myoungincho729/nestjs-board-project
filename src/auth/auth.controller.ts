import { Body, Controller, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { GetUser } from './get-user-decorator';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/signup')
    signUp(@Body() authCredentialDto: AuthCredentialDto): Promise<void> {
        return this.authService.signUp(authCredentialDto);
    }

    @Post('/signin')
    singIn(@Body(ValidationPipe) authCredentialDto: AuthCredentialDto): Promise<{accessToken: string}> {
        return this.authService.singIn(authCredentialDto);
    }

    @Post('/authTest')
    @UseGuards(AuthGuard())
    authTest(@GetUser() user: User){
        console.log('user :', user);
    }
    
}
