import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-admin-home',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12">
                <div class="card">
                    <h5 class="text-2xl font-bold mb-4">Welcome, {{ (authService.user$ | async)?.fullname || 'Admin' }}!</h5>
                    <p class="text-muted-color">This is your lead generation command center. Use the sidebar to navigate through leads and reports.</p>
                </div>
            </div>
            
            <div class="col-span-12 lg:col-span-4">
                <div class="card mb-0">
                    <div class="flex justify-between mb-4">
                        <div>
                            <span class="block text-muted-color font-medium mb-4">Total Leads</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium text-2xl">1,526</div>
                        </div>
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-filter text-blue-500 !text-xl"></i>
                        </div>
                    </div>
                    <span class="text-primary font-medium">24 new </span>
                    <span class="text-muted-color">since last visit</span>
                </div>
            </div>

            <div class="col-span-12 lg:col-span-4">
                <div class="card mb-0">
                    <div class="flex justify-between mb-4">
                        <div>
                            <span class="block text-muted-color font-medium mb-4">Conversion Rate</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium text-2xl">12.5%</div>
                        </div>
                        <div class="flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-chart-bar text-orange-500 !text-xl"></i>
                        </div>
                    </div>
                    <span class="text-primary font-medium">+2% </span>
                    <span class="text-muted-color">from last month</span>
                </div>
            </div>

            <div class="col-span-12 lg:col-span-4">
                <div class="card mb-0">
                    <div class="flex justify-between mb-4">
                        <div>
                            <span class="block text-muted-color font-medium mb-4">Active Agents</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium text-2xl">48</div>
                        </div>
                        <div class="flex items-center justify-center bg-green-100 dark:bg-green-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-users text-green-500 !text-xl"></i>
                        </div>
                    </div>
                    <span class="text-primary font-medium">5 </span>
                    <span class="text-muted-color">currently online</span>
                </div>
            </div>
        </div>
    `
})
export class AdminHomeComponent {
    constructor(public authService: AuthService) {}
}
