// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-formulario-reporte',
//   imports: [],
//   templateUrl: './formulario-reporte.component.html',
//   styleUrl: './formulario-reporte.component.css'
// })
// export class FormularioReporteComponent {

// }


// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { ServicioReportes } from '../../services/servicio-reportes.service';
// import { Reporte } from '../../models/reporte';


// @Component({
//   selector: 'app-formulario-reporte',
//   imports:[FormsModule],
//   templateUrl: './formulario-reporte.component.html',
//   styleUrl: './formulario-reporte.component.css'

  
// })
// export class FormularioReporteComponent {
//   id: string = '';
//   laboratorio: number = 1;
//   foto: string = '';
//   descripcion: string = '';
//   usuario: string = '';
//   fecha: Date = new Date();

//   constructor(private servicioReportes: ServicioReportes) {}

//   mandarReporte() {
//     const nuevoReporte: Reporte = {
//       id: this.id,
//       laboratorio: this.laboratorio,
//       foto: this.foto,
//       descripcion: this.descripcion,
//       usuario: this.usuario,
//       fecha: this.fecha,
//     };
//     this.servicioReportes.guardarReporte(nuevoReporte);
//   }
// }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicioReportes } from '../../services/servicio-reportes.service';
import { Reporte } from '../../models/reporte';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-formulario-reporte',
  standalone: true,
  imports: [FormsModule,LoginComponent],
  templateUrl: './formulario-reporte.component.html',
  styleUrls: ['./formulario-reporte.component.css']
})
export class FormularioReporteComponent {
  id: number | null = null;
  laboratorio: number = 1;
  foto: string | null = null;
  descripcion: string = '';
  usuario: string = '';
  fecha: Date = new Date();
  mensajeErrorEquipo: string = '';
  mensajeErrorUsuario: string = '';

  usuariosPermitidos: string[] = ['Ariana', 'Juanito', 'Lucia'];

  constructor(private servicioReportes: ServicioReportes) {}

  // Valida el ID del equipo en tiempo real
  validarEquipo() {
    if (this.id === null || this.id < 1 || this.id > 16) {
      this.mensajeErrorEquipo = '❌ No hay este equipo';
    } else {
      this.mensajeErrorEquipo = '';
    }
  }

  // Valida el usuario en tiempo real
  validarUsuario() {
    if (!this.usuariosPermitidos.includes(this.usuario.trim())) {
      this.mensajeErrorUsuario = '❌ Error: Usuario no permitido';
    } else {
      this.mensajeErrorUsuario = '';
    }
  }

  // Cargar imagen y mostrar vista previa
// Cargar imagen y mostrar vista previa
cargarImagen(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];

    if (file.size > 2 * 1024 * 1024) {
      alert('El tamaño de la imagen es muy grande. Máximo 2MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      this.foto = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
}

  // Enviar el reporte
  mandarReporte() {
    if (this.mensajeErrorEquipo || this.mensajeErrorUsuario) return;

    const nuevoReporte: Reporte = {
      id: String(this.id),
      laboratorio: this.laboratorio,
      foto: this.foto || '',
      descripcion: this.descripcion,
      usuario: this.usuario,
      fecha: this.fecha,
    };
    this.servicioReportes.guardarReporte(nuevoReporte);
  }
}
