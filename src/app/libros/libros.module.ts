import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { LibrosMockComponent } from './libros-mock/libros-mock.component';
import { FormsModule } from '@angular/forms';
import { LibrosMocSrvComponent } from './libros-moc-srv/libros-moc-srv.component';
import { LibrosGoogleComponent } from './libros-google/libros-google.component';
import { LibrosGoogleSrvComponent } from './libros-google-srv/libros-google-srv.component';


@NgModule({
  declarations: [LibrosComponent, LibrosMockComponent, LibrosMocSrvComponent, LibrosGoogleComponent, LibrosGoogleSrvComponent],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    FormsModule
  ]
})
export class LibrosModule { }
