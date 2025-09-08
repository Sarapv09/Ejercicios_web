import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../shared/services/auth';
import { User } from '../../../shared/interfaces/user';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  standalone: true,                
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']       
})
export class Login {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  authService = inject(Auth);

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  onLogin() {

    if (!this.loginForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Faltan campos por diligenciar',
      })
      return;
    }

    let user = this.loginForm.value as User;

    let strUser = localStorage.getItem(user.username!);

    localStorage.setItem('user', JSON.stringify(user.username));

    if (!strUser) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario no encontrado',
      })
      return;
    }
    let parsedUser = JSON.parse(strUser);

    if (parsedUser.password !== user.password) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Contraseña incorrecta',
      })
      return;
    }
    
    let loginResponse = this.authService.login(user);

    if(!!loginResponse.success){
      alert('Ingreso exitoso');
      this.router.navigate([loginResponse.redirectTo]);
      return;
    }
  }
}
