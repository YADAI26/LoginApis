import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  hidePassword = true;

  constructor(private Api: ApiService, private router: Router) {}

  login() {
    this.Api.getUsers().subscribe(users => {
      const user = users.find(u => u.email === this.email && u.password === this.password);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/usuarios']);
      } else {
        this.error = 'Correo o contraseña inválidos';
      }
    });
  }
}