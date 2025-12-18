import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from '@/dev/layout/component/app.menuitem';

@Component({
    selector: 'app-crm-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class CrmMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboard',
                items: [
                    { label: 'Admin Home', icon: 'pi pi-fw pi-home', routerLink: ['/admin/home'] },
                    { label: 'Leads', icon: 'pi pi-fw pi-filter', routerLink: ['/admin/leads'] },
                    { label: 'Reports', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/admin/reports'] }
                ]
            },
            {
                label: 'Sakai Reference',
                items: [
                    { label: 'View UI Elements', icon: 'pi pi-fw pi-eye', routerLink: ['/dev'] }
                ]
            }
        ];
    }
}
