import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarprestadorPage } from './cadastrarprestador.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarprestadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarprestadorPageRoutingModule {}
