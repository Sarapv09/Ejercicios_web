import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Auth } from '../../../shared/services/auth';
import { User } from '../../../shared/interfaces/user';

@Component({
  selector: 'app-sign-up',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {

  fb = inject(FormBuilder);

  authService = inject(Auth);

  ruta = '';

  title = 'Registro de usuario';

  validators = [Validators.required, Validators.minLength(4)];

  signUpForm = this.fb.group({
    username:['', [Validators.required]],
    email:['', [Validators.required]],
    password:['', this.validators],
    rePassword:['',  this.validators],
  })
  router: any;


  onSignUp(){
    if(!this.signUpForm.valid){
      alert('Faltan campos por diligenciar');
      return;
    }

    let user = this.signUpForm.value as User;
    console.log(user);

    let SignUpResponse = this.authService.signUp(user);

    if(!!SignUpResponse.success){
      this.router.navigate([SignUpResponse.redirectTo]);
      return;
    }

    alert(SignUpResponse.message);

  }

}
