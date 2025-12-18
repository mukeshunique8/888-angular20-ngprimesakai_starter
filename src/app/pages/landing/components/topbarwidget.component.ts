import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { APP_CONSTANTS } from '../../../core/constants/app.constants';

@Component({
    selector: 'topbar-widget',
    standalone: true,
    imports: [RouterModule, CommonModule, ButtonModule, RippleModule],
    template: `
        <a class="flex items-center" routerLink="/">
            <span class="text-surface-900 dark:text-surface-0 font-medium text-2xl leading-normal mr-20">{{ constants.APP_NAME }}</span>
        </a>

        <div class="flex items-center">
            <a pButton pRipple label="Login" icon="pi pi-user" routerLink="/auth/login" class="p-button-text text-primary-500 font-bold"></a>
            <a pButton pRipple label="Dev" icon="pi pi-code" routerLink="/dev" class="p-button-text ml-4 font-bold"></a>
        </div>
    `
})
export class TopbarWidget {
    constants = APP_CONSTANTS;
}
