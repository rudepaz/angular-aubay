import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SaludoComponent } from './saludo/saludo.component';
import { FormsModule } from '@angular/forms';
import { SaludoLocalComponent } from './saludo-local/saludo-local.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent, SaludoComponent, SaludoLocalComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
