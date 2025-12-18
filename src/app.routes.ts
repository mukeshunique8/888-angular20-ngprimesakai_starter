import { Routes } from '@angular/router';
import { LandingComponent } from './app/pages/landing/landing.component';
import { AuthGuard } from './app/core/guards/auth.guard';
import { AdminLayout } from './app/layouts/admin-layout.component';

export const appRoutes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'dev', loadChildren: () => import('./app/dev/dev.routes').then((m) => m.devRoutes) },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes').then((m) => m.authRoutes) },
    {
        path: 'admin',
        component: AdminLayout,
        canActivate: [AuthGuard],
        loadChildren: () => import('./app/pages/admin/admin.routes').then((m) => m.adminRoutes)
    },
    { path: 'client', loadChildren: () => import('./app/pages/client/client.routes').then((m) => m.clientRoutes) },
    { path: '**', redirectTo: '' }
];
