/* eslint-disable prettier/prettier */
import { JwtAuthGuard } from './jwt-auth.guard';
import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
// import { JwtAuthGuard } from 'src/auth/guards';
// import { ACGuard, Role, UseRoles } from 'nest-access-control';

export function Auth() {
  return applyDecorators(
    UseGuards(JwtAuthGuard),
    // UseRoles(...roles),
    ApiBearerAuth(),
  );
}
