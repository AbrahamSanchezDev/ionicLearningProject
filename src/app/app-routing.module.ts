import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'infinitescrolla',
    loadChildren: () => import('./infinitescrolla/infinitescrolla.module').then( m => m.InfinitescrollaPageModule)
  },
  {
    path: 'apitester',
    loadChildren: () => import('./apitester/apitester.module').then( m => m.ApitesterPageModule)
  },
  {
    path: 'calculadora',
    loadChildren: () => import('./calculadora/calculadora.module').then( m => m.CalculadoraPageModule)
  },
  {
    path: 'admin-formulario',
    loadChildren: () => import('./admin-formulario/admin-formulario.module').then( m => m.AdminFormularioPageModule)
  },
  {
    path: 'admin-respuestas',
    loadChildren: () => import('./admin-respuestas/admin-respuestas.module').then( m => m.AdminRespuestasPageModule)
  },
  {
    path: 'convertidor-de-monedas',
    loadChildren: () => import('./convertidor-de-monedas/convertidor-de-monedas.module').then( m => m.ConvertidorDeMonedasPageModule)
  },
  {
    path: 'conwaygame',
    loadChildren: () => import('./conwaygame/conwaygame.module').then( m => m.ConwaygamePageModule)
  },
  {
    path: 'simple-algorithms',
    loadChildren: () => import('./simple-algorithms/simple-algorithms.module').then( m => m.SimpleAlgorithmsPageModule)
  },
  {
    path: 'agenda-de-contactos',
    loadChildren: () => import('./agenda-de-contactos/agenda-de-contactos.module').then( m => m.AgendaDeContactosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
