import { Injectable, Injector, ComponentFactoryResolver } from '@angular/core';
import { ModalRef } from "./modal-ref";
import { ModalStack } from "./modal-stack";

export interface ModalOptions {

}

export class Modal {
    constructor(
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _injector: Injector,
        private _modalStack: ModalStack
    ) { }

    public open(content:any, options: ModalOptions):ModalRef {
        return this._modalStack.open(this._componentFactoryResolver, this._injector, content, options);
    }
}