import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { LandingPageComponent } from "./landing-page.component";
import { DynamicComponent } from "./dynamic.component";

export const LANDING_ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingPageComponent
    }
]

const providers = [
    
];

const declarables = [
    LandingPageComponent,
    DynamicComponent
];

@NgModule({
    imports: [CommonModule, RouterModule, HttpClientModule],
    entryComponents: [DynamicComponent],
    declarations: [declarables],
    exports: [declarables],
    providers: providers
})
export class LandingModule { }