import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { APP_CONSTANTS } from '../../../core/constants/app.constants';

@Component({
    selector: 'hero-widget',
    standalone: true,
    imports: [RouterModule, ButtonModule, RippleModule],
    template: `
        <div id="hero" class="flex flex-col pt-6 px-6 lg:px-20 overflow-hidden" style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%); clip-path: ellipse(150% 87% at 93% 13%);">
            <div class="mx-6 md:mx-20 mt-0 md:mt-6">
                <h1 class="text-6xl font-bold text-gray-900 leading-tight">
                    <span class="font-light block">Scale with</span>
                    {{ constants.LANDING.HERO.TITLE }}
                </h1>
                <p class="font-normal text-2xl leading-normal md:mt-4 text-gray-700">{{ constants.LANDING.HERO.SUBTITLE }}</p>
                <button pButton pRipple [label]="constants.LANDING.HERO.BUTTON_PRIMARY" type="button" class="mr-4 mt-6 text-xl p-4 rounded-xl" routerLink="/auth/login"></button>
                <button pButton pRipple [label]="constants.LANDING.HERO.BUTTON_SECONDARY" type="button" class="mt-6 text-xl p-4 rounded-xl p-button-outlined"></button>
            </div>
            <div class="flex justify-center md:justify-end">
                <img src="assets/demo/images/landing/screen-1.png" [alt]="constants.LANDING.HERO.IMAGE_ALT" class="w-9/12 md:w-auto" style="opacity: 0.2; transform: rotate(-10deg) translate(50px, 100px);" />
            </div>
        </div>
    `
})
export class HeroWidget {
    constants = APP_CONSTANTS;
}
