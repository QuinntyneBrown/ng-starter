import { Routes, RouterModule } from '@angular/router';
import { LANDING_ROUTES } from "./landing/landing.module";

export const RoutingModule = RouterModule.forRoot([
    ...LANDING_ROUTES
]);