import { Routes } from '@angular/router';

export const clientRoutes: Routes = [
    { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.ClientHomeComponent) },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
