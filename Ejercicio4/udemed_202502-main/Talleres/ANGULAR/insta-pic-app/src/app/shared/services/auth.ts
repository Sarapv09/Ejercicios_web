import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { LoginResponse, SignUpResponse } from '../interfaces/login-response';
import { SignUp } from '../../features/pages/sign-up/sign-up';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  login(user:User):LoginResponse{

    const strUser = localStorage.getItem(user.username);

    if(strUser && user.password === JSON.parse(strUser).password){
      return {success:true, redirectTo: '/home'};
    }

    return {success:false};
  }

  signUp(user:User):SignUpResponse{
    if(localStorage.getItem(user.username!)){
      return {success:false, message: 'Usuario ya existe' };
    }

    localStorage.setItem(user.username!, JSON.stringify(user));
    return {success:true, redirectTo: '/login'};
  }

}
