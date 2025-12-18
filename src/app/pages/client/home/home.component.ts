import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-client-home',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="card">
            <h5 class="text-2xl font-bold mb-4">Client Dashboard</h5>
            <p>Welcome to your personal area. Here you can see your assigned leads and manage your profile.</p>
        </div>
    `
})
export class ClientHomeComponent {}
