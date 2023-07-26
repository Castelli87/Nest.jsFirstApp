import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BeltGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //Logic related with authorization
    // if the logic return false 
    // this guard is blocking to do something 
    // EX. unable  post a new ninja from a user with a no black belt 
    return false;
  }
}


