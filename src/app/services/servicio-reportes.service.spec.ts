import { TestBed } from '@angular/core/testing';

import { ServicioReportesService } from './servicio-reportes.service';

describe('ServicioReportesService', () => {
  let service: ServicioReportesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioReportesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
