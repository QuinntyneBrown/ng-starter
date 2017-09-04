import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";
import { ModalService } from "./services/modal.service";
import { Storage } from "./services/storage.service";

import { BackdropComponent } from "./components/backdrop.component";
import { ModalWindowComponent } from "./components/modal-window.component";

const providers = [
    ModalService,
    Storage
];

const declarables = [
    BackdropComponent,
    ModalWindowComponent
];

@NgModule({
    imports: [CommonModule, RouterModule, HttpClientModule],
    entryComponents: [BackdropComponent, ModalWindowComponent],
    declarations: [declarables],
    exports:[declarables],
    providers: providers,    
})
export class SharedModule {}