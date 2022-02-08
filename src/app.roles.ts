/* eslint-disable prettier/prettier */
// app.roles.ts

// import { RolesBuilder } from 'nest-access-control';

// export enum AppRoles {
//   USER = 'USER',
//   ADMIN = 'ADMIN',
// }

// export enum AppRources {
//   USER = 'USER',
//   TASK = 'TASK',
// }

// export const roles: RolesBuilder = new RolesBuilder();

// roles
//   // USER ROLES
//   .grant(AppRoles.USER) // define new or modify existing role. also takes an array.
//   .updateOwn(AppRources.USER)
//   .deleteOwn(AppRources.USER)
//   .createOwn(AppRources.TASK)
//   .updateOwn(AppRources.TASK)
//   .deleteOwn(AppRources.TASK)
//   // ADMIN ROLES
//   .grant(AppRoles.ADMIN) // define new or modify existing role. also takes an array.
//   .extend(AppRoles.USER) // extend role with another role. also takes an array.
//   .createAny(AppRources.USER)
//   .updateAny(AppRources.USER, AppRources.TASK)
//   .deleteAny(AppRources.USER, AppRources.TASK);
