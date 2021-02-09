import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';

import { WelcomeComponent } from './welcome.component';
import { PeticionesTareasService } from 'src/app/services/peticiones-tareas.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [WelcomeRoutingModule,
    HttpClient,
    NzCardModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    ReactiveFormsModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent,
  ],
  providers:[PeticionesTareasService]
})
export class WelcomeModule { }
