import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_CONSTANTS } from '../../../core/constants/app.constants';

@Component({
    selector: 'features-widget',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div id="features" class="py-6 px-6 lg:px-20 mt-8 mx-0 lg:mx-20">
            <div class="grid grid-cols-12 gap-4 justify-center">
                <div class="col-span-12 text-center mt-20 mb-6">
                    <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">{{ constants.LANDING.FEATURES.TITLE }}</div>
                    <span class="text-muted-color text-2xl">{{ constants.LANDING.FEATURES.SUBTITLE }}</span>
                </div>

                <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0" *ngFor="let item of constants.LANDING.FEATURES.ITEMS">
                    <div style="height:160px; padding:2px; border-radius:10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2),rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(187, 199, 205, 0.2));">
                        <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius:8px;">
                            <div class="flex items-center justify-center bg-yellow-200 mb-4" style="width:3.5rem; height:3.5rem; border-radius:10px;">
                                <i class="text-yellow-700 text-2xl" [ngClass]="item.ICON"></i>
                            </div>
                            <h5 class="mb-2 text-surface-900 dark:text-surface-0">{{ item.TITLE }}</h5>
                            <span class="text-surface-600 dark:text-surface-200">{{ item.DESCRIPTION }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class FeaturesWidget {
    constants = APP_CONSTANTS;
}
