import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
  },
  {
  path: 'home',
  loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
  path: 'login',
  loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
  path: 'registrar',
  loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'cadastrarusuario',
    loadChildren: () => import('./cadastrarusuario/cadastrarusuario.module').then( m => m.CadastrarusuarioPageModule)
  },
  {
    path: 'cadastrarprestador',
    loadChildren: () => import('./cadastrarprestador/cadastrarprestador.module').then( m => m.CadastrarprestadorPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
