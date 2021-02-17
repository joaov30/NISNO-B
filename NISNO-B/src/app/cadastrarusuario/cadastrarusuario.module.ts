import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarusuarioPageRoutingModule } from './cadastrarusuario-routing.module';

import { CadastrarusuarioPage } from './cadastrarusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarusuarioPageRoutingModule
  ],
  declarations: [CadastrarusuarioPage]
})
export class CadastrarusuarioPageModule {}
