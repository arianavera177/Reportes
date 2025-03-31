// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ServicioReportesService {

//   constructor() { }
// }



// src/app/services/servicio-reportes.ts


// src/app/services/servicio-reportes.ts

import { Injectable } from '@angular/core';
import { Reporte } from '../models/reporte';

@Injectable({
  providedIn: 'root',
})
export class ServicioReportes {
  private reportes: Reporte[] = [];

  constructor() {}

  guardarReporte(reporte: Reporte): void {
    this.reportes.push(reporte);
    localStorage.setItem('reportes', JSON.stringify(this.reportes));
  }

  obtenerReportes(): Reporte[] {
    const reportesGuardados = localStorage.getItem('reportes');
    return reportesGuardados ? JSON.parse(reportesGuardados) : [];
  }

  eliminarReporte(id: string): void {
    this.reportes = this.reportes.filter((reporte) => reporte.id !== id);
    localStorage.setItem('reportes', JSON.stringify(this.reportes));
  }
}
