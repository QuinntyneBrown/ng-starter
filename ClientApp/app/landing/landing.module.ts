import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SharedModule } from "../shared/shared.module";

import { LandingPageComponent } from "./landing-page.component";
import { TestComponent } from "./test.component";

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
    LandingPageComponent, TestComponent
];

@NgModule({
    imports: [CommonModule, RouterModule, HttpClientModule, SharedModule],
    entryComponents: [TestComponent],
    declarations: [declarables],
    exports: [declarables],
    providers: providers
})
export class LandingModule { }