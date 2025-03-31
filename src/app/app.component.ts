// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   title = 'myapp';
// }


//listo f
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { appRoutes } from './app.routes';
// import { RouterOutlet } from '@angular/router';
// import { LoginComponent } from './Components/login/login.component';


// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, LoginComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
  
// })
// export class AppComponent {
//   title = 'Reporte de Problemas';

//   constructor(private router: Router) {
//     this.router.config = appRoutes;
//   }
// }


import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { appRoutes } from './app.routes';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Reporte de Problemas';
  mostrarLogin = true; // Variable para mostrar/ocultar el login

  constructor(private router: Router) {
    this.router.config = appRoutes;

    // Escuchar los cambios de ruta y ocultar el login si estamos en lista-reportes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mostrarLogin = event.url !== '/lista-reportes'; // Oculta el login si estamos en lista-reportes
      }
    });
  }
}
