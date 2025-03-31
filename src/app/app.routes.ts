// import { Routes } from '@angular/router';

// export const routes: Routes = [];


//listo
// import { Routes } from '@angular/router';
// import { FormularioReporteComponent } from './Components/formulario-reporte/formulario-reporte.component';
// import { ListaReportesComponent } from './Components/lista-reportes/lista-reportes.component';
// import { LoginComponent } from './Components/login/login.component';

// export const appRoutes: Routes = [
//   { path: '', component: FormularioReporteComponent },
//   { path: 'lista-reportes', component: ListaReportesComponent },
//   { path: 'login', component: LoginComponent },
// ];


//casi terminado
// import { Routes } from '@angular/router';
// import { FormularioReporteComponent } from './Components/formulario-reporte/formulario-reporte.component';
// import { ListaReportesComponent } from './Components/lista-reportes/lista-reportes.component';
// import { LoginComponent } from './Components/login/login.component';

// export const appRoutes: Routes = [
//   { path: '', component: FormularioReporteComponent },
//   { path: 'lista-reportes', component: ListaReportesComponent },
//   { path: 'login', component: LoginComponent },
// ];



import { Routes } from '@angular/router';
import { FormularioReporteComponent } from './Components/formulario-reporte/formulario-reporte.component';
import { ListaReportesComponent } from './Components/lista-reportes/lista-reportes.component';

export const appRoutes: Routes = [
  { path: '', component: FormularioReporteComponent }, // Página principal con formulario y login
  { path: 'formulario-reporte', component: FormularioReporteComponent },
  { path: 'lista-reportes', component: ListaReportesComponent },
];
