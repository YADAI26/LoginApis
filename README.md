
<div align="center">

**TECNOLOGICO NACIONAL DE MEXICO**  
**INSTITUTO TECNOLÓGICO DE OAXACA**

Departamento de Ingeniería en Sistemas Computacionales  

Materia: Programación Web  
“LOGIN APIS”  
Profesor: Martínez Nieto Adelina

Equipo 10:  
López Cruz David Eduardo  
Salinas Montesinos Cintia Yadai  
Grupo: VSI  

Oaxaca, Oaxaca, a 14 de julio de 2025.

</div>

---
## 🔐 1. Módulo de Login

### Características:
- Fondo animado con estilo galáctico.
- Formulario con campos de **correo electrónico** y **contraseña**.
- Botón para mostrar/ocultar la contraseña.
- Validación y autenticación usando una API externa.

### API de usuarios:
```
https://api.escuelajs.co/api/v1/users
```

### Funcionamiento:
- El usuario escribe su correo y contraseña.
- Se valida si coincide con algún usuario de la API.
- Si es válido, se guarda el usuario en `localStorage`.
- Se redirige a la vista de bienvenida del usuario.

---

## 👤 2. Vista del Usuario Autenticado

### Contenido:
- Mensaje: “Bienvenido, [Nombre]”.
- Tabla con:
  - Foto (avatar)
  - Nombre
  - Correo electrónico
- Botón para cerrar sesión (borra el localStorage).

---

## 👾 3. Vista de Personajes - Rick and Morty

### API usada:
```
https://rickandmortyapi.com/api/character
```

### Características:
- Página con barra de navegación.
- Tabla con los personajes, incluyendo:
  - Avatar
  - Nombre
  - Estado
  - Acciones (Ver más, Editar, Eliminar)
- Buscador en tiempo real.
- Modal con información detallada del personaje.
- Paginación de 5 personajes por página.
- **Botón Agregar:** añade personajes de forma local (no en la API).

⚠️ **Nota:** Los personajes agregados, editados o eliminados se modifican solo en la tabla local. No afectan la API real.

---

## 🧠 Explicación del Código

### 🔁 Flujo de la App:
1. Login → validación con API de usuarios.
2. Usuario autenticado → vista de perfil.
3. Navegación a personajes → tabla con paginación, búsqueda, edición local.

### 🧩 Métodos Clave

**login.component.ts**
```ts
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
```

**usuarios.component.ts**
```ts
ngOnInit(): void {
  const savedUser = localStorage.getItem('user');
  if (savedUser) {
    this.user = JSON.parse(savedUser);
  } else {
    this.router.navigate(['/login']);
  }
}
```

**personajes.component.ts** (Agregar)
```ts
agregarPersonaje() {
  const nuevo = {
    name: 'Nuevo personaje',
    status: 'Desconocido',
    image: 'https://via.placeholder.com/100'
  };
  this.personajes.unshift(nuevo);
  this.actualizarPaginas();
}
```

---

## 🧱 Estructura del Proyecto

- `login.component.ts`: Formulario y validación.
- `usuarios.component.ts`: Perfil de usuario autenticado.
- `personajes.component.ts`: Tabla dinámica con personajes.
- `api.service.ts`: Servicios para consumir APIs REST.

---

## 🚀 Tecnologías Usadas

- Angular 20
- TypeScript
- HTML + CSS
- Bootstrap
- API REST: Escuelajs y Rick and Morty

---

## 📸 Imágenes del Navegador

### 📍 Login
<img width="1904" height="984" alt="image" src="https://github.com/user-attachments/assets/eb28119c-7bc7-4e47-a51b-1364f5a572d5" />

### 👤 Interfaz del Usuario
<img width="1905" height="637" alt="image" src="https://github.com/user-attachments/assets/5cfb6cb8-7231-41f2-9253-ba8708fa6f17" />

### 👾 Interfaz de Personajes
<img width="1905" height="974" alt="image" src="https://github.com/user-attachments/assets/7de93cba-8c9f-446f-9bf8-3d36ac559e65" />

---

## 🔑 Datos de Acceso de Ejemplo

**Usuario:** `davrangylyjowfddv@gmail.com`  
**Contraseña:** `2004dd`

---

## 🌐 GitHub Pages

Puedes probar la app aquí:  
👉 [https://yadai26.github.io/LoginApis/login](https://yadai26.github.io/LoginApis/login)

---


---

## 🧩 Fragmentos del Código Principal

### 🔐 LoginComponent
Valida si el correo y la contraseña coinciden con un usuario de la API:

```ts
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
```

### 👤 UsuariosComponent
Carga los datos del usuario desde `localStorage`:

```ts
ngOnInit(): void {
  const savedUser = localStorage.getItem('user');
  if (savedUser) {
    this.user = JSON.parse(savedUser);
  } else {
    this.router.navigate(['/login']);
  }
}
```

### 👾 PersonajesComponent

**Agregar personaje localmente a la tabla:**
```ts
agregarPersonaje() {
  const nuevo = {
    name: 'Nuevo personaje',
    status: 'Desconocido',
    image: 'https://via.placeholder.com/100'
  };
  this.personajes.unshift(nuevo);
  this.actualizarPaginas();
}
```

**Filtrar personajes por nombre o estado:**
```ts
get personajesFiltrados() {
  if (!this.searchTerm.trim()) return this.personajes;
  const term = this.searchTerm.trim().toLowerCase();
  return this.personajes.filter(p =>
    p.name.toLowerCase().includes(term) ||
    p.status.toLowerCase().includes(term)
  );
}
```

---


## 🔑 Datos de Acceso de Ejemplo

**Usuario:** `davrangylyjowfddv@gmail.com`  
**Contraseña:** `2004dd`

---

## 🌐 GitHub Pages

Puedes probar la app aquí:  
👉 [https://yadai26.github.io/LoginApis/login](https://yadai26.github.io/LoginApis/login)

---
