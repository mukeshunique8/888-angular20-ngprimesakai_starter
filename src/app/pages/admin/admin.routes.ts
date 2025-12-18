import { Routes } from '@angular/router';
import { AdminHomeComponent } from '@/pages/admin/home/home.component';

export const adminRoutes: Routes = [
    { path: 'home', component: AdminHomeComponent },
    { path: 'leads', component: AdminHomeComponent }, // Placeholder
    { path: 'reports', component: AdminHomeComponent }, // Placeholder
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
