import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.css']
})
export class UsuariosComponent implements OnInit {
  user: any = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.user = JSON.parse(savedUser);
    } else {
      // Si no hay usuario logueado, redirigir al login
      this.router.navigate(['/login']);
    }
  }



  logout(): void {
    localStorage.removeItem('user');
    this.user = null;
    this.router.navigate(['/login']);
  }
}