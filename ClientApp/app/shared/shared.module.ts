import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";

import { Storage } from "./services/storage.service";
import { HeaderComponent } from "./components/header.component";

const providers = [
    Storage
];

const declarables = [
    HeaderComponent
];

@NgModule({
    imports: [CommonModule, RouterModule, HttpClientModule],
    entryComponents: [],
    declarations: [declarables],
    exports:[declarables],
    providers: providers
})
export class SharedModule {}