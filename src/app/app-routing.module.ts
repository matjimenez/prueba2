import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: 'register',
    loadChildren: () => import('./a/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./a/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./a/listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'detalles',
    loadChildren: () => import('./a/detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./a/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
