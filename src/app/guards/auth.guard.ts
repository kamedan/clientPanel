import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public afAuth: AngularFireAuth,
    private router:Router,

  ) { }

  canActivate(): Observable<boolean>{
    return this.afAuth.authState.map(auth => {
        if(!auth){
            this.router.navigate(['/login']);
            return false;
        }else{
            return true;
        }
    });
  }


}
