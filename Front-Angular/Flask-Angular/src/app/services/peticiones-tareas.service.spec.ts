import { TestBed } from '@angular/core/testing';

import { PeticionesTareasService } from './peticiones-tareas.service';

describe('PeticionesTareasService', () => {
  let service: PeticionesTareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionesTareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
