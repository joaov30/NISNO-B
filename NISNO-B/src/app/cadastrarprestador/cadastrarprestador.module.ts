import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarprestadorPageRoutingModule } from './cadastrarprestador-routing.module';

import { CadastrarprestadorPage } from './cadastrarprestador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarprestadorPageRoutingModule
  ],
  declarations: [CadastrarprestadorPage]
})
export class CadastrarprestadorPageModule {}
