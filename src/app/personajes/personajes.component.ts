import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Personaje {
  name: string;
  status: string;
  image: string;
  // Agrega más propiedades según necesites
}

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './personajes.html',
  styleUrls: ['./personajes.css']
})
export class PersonajesComponent implements OnInit {
  personajes: Personaje[] = [];
  searchTerm: string = '';
  modalAbierto = false;
  modalTipo: 'ver' | 'editar' | null = null;
  personajeModal: Personaje | null = null;
  personajeEdit: Personaje = {} as Personaje;
  personajeEditIndex: number | null = null;

  // Paginación
  porPagina: number = 5; // Cambiado a 5 personajes por página
  paginaActual: number = 1;
  paginas: number[] = [];

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.cargarPersonajes();
  }

  cargarPersonajes() {
    this.api.getCharacters().subscribe({
      next: (data) => {
        this.personajes = data.results;
        this.actualizarPaginas();
      },
      error: (error) => {
        console.error('Error al cargar personajes:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    });
  }

  get personajesFiltrados() {
    if (!this.searchTerm.trim()) return this.personajes;
    const term = this.searchTerm.trim().toLowerCase();
    return this.personajes.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.status.toLowerCase().includes(term)
    );
  }

  get personajesPaginados() {
    const inicio = (this.paginaActual - 1) * this.porPagina;
    return this.personajesFiltrados.slice(inicio, inicio + this.porPagina);
  }

  openModal(tipo: 'ver' | 'editar', personaje: Personaje, index?: number) {
    this.modalTipo = tipo;
    this.personajeModal = personaje;
    if (tipo === 'editar') {
      this.personajeEdit = { ...personaje };
      this.personajeEditIndex = index ?? null;
    }
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.modalTipo = null;
    this.personajeModal = null;
    this.personajeEdit = {} as Personaje;
    this.personajeEditIndex = null;
  }

  guardarEdicion() {
    if (this.personajeEditIndex !== null) {
      this.personajes[this.personajeEditIndex] = { ...this.personajeEdit };
      this.actualizarPaginas();
    }
    this.cerrarModal();
  }

  eliminarPersonaje(index: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este personaje?')) {
      this.personajes.splice(index, 1);
      this.actualizarPaginas();
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  actualizarPaginas() {
    const total = this.personajesFiltrados.length;
    const numPaginas = Math.ceil(total / this.porPagina);
    this.paginas = Array.from({ length: numPaginas }, (_, i) => i + 1);
    if (this.paginaActual > numPaginas) this.paginaActual = 1;
  }

  cambiarPagina(p: number) {
    if (p >= 1 && p <= this.paginas.length) {
      this.paginaActual = p;
    }
  }

  onSearchChange() {
    this.paginaActual = 1;
    this.actualizarPaginas();
  }

  // Método auxiliar para validar índices
  isValidIndex(index: number): boolean {
    return index >= 0 && index < this.personajes.length;
  }
}