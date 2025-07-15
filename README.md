
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

### Funcionamiento:
- Al ingresar, se muestran los primeros 5 personajes.
- El usuario puede buscar por nombre o estado.
- Con los botones puede:
  - **Ver más:** muestra un modal con información detallada (especie, género, origen, etc.).
  - **Editar:** permite cambiar el nombre o estado directamente en la tabla.
  - **Eliminar:** remueve al personaje de la vista (sin afectar la API real).
- Paginación dinámica entre páginas de personajes.

---

## 🧱 Estructura del Proyecto

### Componentes principales:
- `login.component.ts`: Vista y lógica del inicio de sesión.
- `usuarios.component.ts`: Muestra el perfil del usuario autenticado.
- `personajes.component.ts`: Maneja la vista de personajes (tabla, acciones, paginación).

### Servicios:
- `auth.service.ts`: Valida el login contra la API de usuarios.
- `character.service.ts`: Obtiene datos de personajes desde Rick and Morty API.

---

## 🚀 Tecnologías Usadas

- Angular 20
- TypeScript
- HTML/CSS
- Bootstrap
- API REST: Escuelajs y Rick and Morty

---

## 🧪 Datos de prueba

Puedes usar los siguientes datos reales desde la API de usuarios:

**Usuario:** `davrangylyjowfddv@gmail.com`  
**Contraseña:** `2004dd`





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
