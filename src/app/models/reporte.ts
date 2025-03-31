// export interface Reporte {
// }



// src/app/models/reporte.ts

export interface Reporte {
    id: string;               // ID del equipo
    laboratorio: number;      // Número del laboratorio
    foto: string;             // Foto del equipo (ruta o URL de la imagen)
    descripcion: string;      // Descripción del problema
    usuario: string;          // Nombre del usuario
    fecha: Date;              // Fecha y hora de creación del reporte
  }
  