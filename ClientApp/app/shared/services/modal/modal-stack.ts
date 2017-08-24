//https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/modal/modal-stack.ts

import { ModalOptions } from "./modal";
import {
    ApplicationRef,
    Injectable,
    Injector,
    ReflectiveInjector,
    ComponentFactory,
    ComponentFactoryResolver,
    ComponentRef,
    TemplateRef
} from '@angular/core';

import { ModalRef } from "./modal-ref";

@Injectable()
export class ModalStack {
    constructor(
    ) {

    }
    
    public open(
        componentFactoryResolver: ComponentFactoryResolver,
        injector: Injector,
        content: any,
        modalOptions: ModalOptions
    ): ModalRef {

        return new ModalRef();
    }
}