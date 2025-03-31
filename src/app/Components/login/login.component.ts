// Suggested code may be subject to a license. Learn more: ~LicenseLog:3051080983.
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

// }


//listo bien hecho
// import { NgIf } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   imports: [FormsModule,NgIf],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
  
// })
// export class LoginComponent  {
//   usuario: string = '';
//   contrasena: string = '';
//   loginExitoso: boolean = false;

//   login() {
//     if (this.usuario === 'mantenimiento' && this.contrasena === 'mantenimiento123') {
//       this.loginExitoso = true;
//     } else {
//       alert('Credenciales incorrectas');
//     }
//   }
// }



import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router para la navegación
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  usuario: string = '';
  contrasena: string = '';
  loginExitoso: boolean = false;

  // Inyecta el servicio Router
  constructor(private router: Router) {}

  login() {
    if (this.usuario === '2025' && this.contrasena === '2025') {
      this.loginExitoso = true;
      // Redirige al componente lista-reportes si las credenciales son correctas
      this.router.navigate(['/lista-reportes']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
