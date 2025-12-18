import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AuthService } from '../../../core/services/auth.service';
import { APP_CONSTANTS } from '../../../core/constants/app.constants';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, CommonModule],
    template: `
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-screen overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                        <div class="text-center mb-8">
                            <i class="pi pi-users text-primary text-5xl mb-4"></i>
                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">{{ constants.AUTH.LOGIN.TITLE }}</div>
                            <span class="text-muted-color font-medium">{{ constants.AUTH.LOGIN.SUBTITLE }}</span>
                        </div>

                        <div>
                            <label for="username" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">{{ constants.AUTH.LOGIN.USERNAME_LABEL }}</label>
                            <input pInputText id="username" type="text" [placeholder]="constants.AUTH.LOGIN.USERNAME_LABEL" class="w-full md:w-120 mb-8" [(ngModel)]="username" />

                            <label for="password" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">{{ constants.AUTH.LOGIN.PASSWORD_LABEL }}</label>
                            <p-password id="password" [(ngModel)]="password" [placeholder]="constants.AUTH.LOGIN.PASSWORD_LABEL" [toggleMask]="true" styleClass="mb-4" [fluid]="true" [feedback]="false"></p-password>

                            <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                                <div class="flex items-center">
                                    <p-checkbox [(ngModel)]="rememberMe" id="rememberme" binary class="mr-2"></p-checkbox>
                                    <label for="rememberme">Remember me</label>
                                </div>
                                <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary">{{ constants.AUTH.LOGIN.FORGOT_PASSWORD }}</span>
                            </div>
                            <p-button [label]="constants.AUTH.LOGIN.BUTTON" styleClass="w-full" (onClick)="onLogin()" [loading]="loading"></p-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class LoginComponent {
    username = '';
    password = '';
    rememberMe = false;
    loading = false;
    constants = APP_CONSTANTS;

    constructor(private authService: AuthService) {}

    onLogin() {
        if (!this.username || !this.password) return;
        this.loading = true;
        this.authService.login({ username: this.username, password: this.password }).subscribe({
            next: () => (this.loading = false),
            error: () => (this.loading = false)
        });
    }
}
