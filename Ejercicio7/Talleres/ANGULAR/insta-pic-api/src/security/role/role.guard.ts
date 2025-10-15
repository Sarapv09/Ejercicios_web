import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { getToken } from '../utils/token-utils';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const token = request.headers['authorization'];
    if (!token) {
      throw new ForbiddenException('Sesión no autorizada');
    }

    let payload: any;
    try {
      payload = this.jwtService.verify(getToken(token));
    } catch (error) {
      throw new ForbiddenException('Sesión expirada');
    }

    const allowedRoles = ['admin', 'supervisor']; // Roles que sí pueden acceder
    const userRole = payload['rol'] || payload['role']; // Campo de rol en el token

    if (!userRole) {
      throw new ForbiddenException('No se encontró rol en la sesión');
    }

    if (!allowedRoles.includes(userRole)) {
      throw new ForbiddenException('No tiene permisos para esta acción');
    }

    // 5️⃣ Si pasa todas las validaciones, se autoriza el acceso
    return true;
  }
}
