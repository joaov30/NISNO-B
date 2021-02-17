import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarusuarioPage } from './cadastrarusuario.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarusuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarusuarioPageRoutingModule {}

