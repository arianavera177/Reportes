// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-lista-reportes',
//   imports: [],
//   templateUrl: './lista-reportes.component.html',
//   styleUrl: './lista-reportes.component.css'
// })
// export class ListaReportesComponent {

// }


//listo
// import { Component } from '@angular/core';
// import { ServicioReportes } from '../../services/servicio-reportes.service';
// import { Reporte } from '../../models/reporte';
// import { NgFor } from '@angular/common';

// @Component({
//   selector: 'app-lista-reportes',
//   imports:[NgFor],
//   templateUrl: './lista-reportes.component.html',
//   styleUrl: './lista-reportes.component.css'
// })
// export class ListaReportesComponent {
//   reportes: Reporte[] = [];

//   constructor(public servicioReportes: ServicioReportes) {
//     this.reportes = this.servicioReportes.obtenerReportes();
//   }

//   leerReporte(reporte: Reporte) {
//     alert(`Leyendo reporte de: ${reporte.id}`);
//   }

//   borrarReporte(id: string) {
//     this.servicioReportes.eliminarReporte(id);
//     this.reportes = this.servicioReportes.obtenerReportes();
//   }
// }


//funciona
// import { Component } from '@angular/core';
// import { ServicioReportes } from '../../services/servicio-reportes.service';
// import { Reporte } from '../../models/reporte';
// import { NgFor } from '@angular/common';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-lista-reportes',
//   imports: [NgFor,CommonModule],
//   templateUrl: './lista-reportes.component.html',
//   styleUrls: ['./lista-reportes.component.css']
// })
// export class ListaReportesComponent {
//   reportes: Reporte[] = [];
//   reporteLeido: Reporte | null = null; // Este será el reporte que se está viendo

//   constructor(public servicioReportes: ServicioReportes) {
//     this.reportes = this.servicioReportes.obtenerReportes();
//   }

//   // Función para leer el reporte
//   leerReporte(reporte: Reporte) {
//     this.reporteLeido = reporte; // Asignamos el reporte al objeto reporteLeido para mostrar sus detalles
//   }

//   // Función para borrar el reporte
//   borrarReporte(id: string) {
//     this.servicioReportes.eliminarReporte(id);
//     this.reportes = this.servicioReportes.obtenerReportes();
//   }
  
// }



import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importar Router
import { ServicioReportes } from '../../services/servicio-reportes.service';
import { Reporte } from '../../models/reporte';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-reportes',
  imports: [NgFor, CommonModule],
  templateUrl: './lista-reportes.component.html',
  styleUrls: ['./lista-reportes.component.css']
})
export class ListaReportesComponent {
  reportes: Reporte[] = [];
  reporteLeido: Reporte | null = null; // Este será el reporte que se está viendo

  constructor(public servicioReportes: ServicioReportes, private router: Router) { // Inyectar el Router
    this.reportes = this.servicioReportes.obtenerReportes();
  }

  // Función para leer el reporte
  leerReporte(reporte: Reporte) {
    this.reporteLeido = reporte; // Asignamos el reporte al objeto reporteLeido para mostrar sus detalles
  }

  // Función para borrar el reporte
  borrarReporte(id: string) {
    this.servicioReportes.eliminarReporte(id);
    this.reportes = this.servicioReportes.obtenerReportes();
  }

  // Función para regresar al formulario de reporte
  regresarAlFormulario() {
    this.router.navigate(['/']); // Esto redirige al componente de formulario-reporte
  }
}
