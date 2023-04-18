import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'players',
    loadChildren: () => import('./components/players/players.module').then(e => e.PlayersModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./components/games/games.module').then(e => e.GamesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(e => e.AuthModule)
  }
  // {
  //   path: '**', redirectTo: 'create-error-page', pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
