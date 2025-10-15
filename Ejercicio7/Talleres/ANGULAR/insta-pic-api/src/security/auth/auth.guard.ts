import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { getToken } from '../utils/token-utils';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(context: ExecutionContext): boolean {

    let request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];

    if(!token){
      throw new ForbiddenException('Sesión no atorizada');
    }

    try{
      const payload = this.jwtService.verify(getToken(token));
    } catch(error){
      throw new ForbiddenException('Sesión expirada');
    }
    return true;
  }

}
