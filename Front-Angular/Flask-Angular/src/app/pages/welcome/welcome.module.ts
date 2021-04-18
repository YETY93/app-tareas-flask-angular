import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PeticionesTareasService } from 'src/app/services/peticiones-tareas.service';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { WelcomeComponent } from './welcome.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconModule } from 'ng-zorro-antd/icon';




@NgModule({
  imports: [WelcomeRoutingModule,
    CommonModule,
    HttpClientModule,
    NzCardModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzTabsModule,
    NzTableModule,
    NzIconModule,
    ReactiveFormsModule,
    NzSpinModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent,
  ],
  providers:[PeticionesTareasService]
})
export class WelcomeModule { }
