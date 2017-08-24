﻿import {
    Component,
    Output,
    EventEmitter,
    Input,
    ElementRef,
    Renderer2,
    OnInit,
    AfterViewInit,
    OnDestroy
} from '@angular/core';

import { ModalDismissReasons } from './modal-dismiss-reasons';

@Component({
    selector: 'ce-modal-window',
    host: {
        '[class]': '"modal fade show" + (windowClass ? " " + windowClass : "")',
        'role': 'dialog',
        'tabindex': '-1',
        'style': 'display: block;',
        '(keyup.esc)': 'escKey($event)',
        '(click)': 'backdropClick($event)'
    },
    template: `
    <div [class]="'modal-dialog' + (size ? ' modal-' + size : '')" role="document">
        <div class="modal-content"><ng-content></ng-content></div>
    </div>
    `
})
export class NgbModalWindow implements OnInit, AfterViewInit, OnDestroy {

    private _elementWithFocus: Element;  // element that is focused prior to modal opening

    @Input() backdrop: boolean | string = true;
    @Input() keyboard = true;
    @Input() size: string;
    @Input() windowClass: string;

    @Output('dismiss') dismissEvent = new EventEmitter();

    constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { }

    backdropClick($event): void {
        if (this.backdrop === true && this._elementRef.nativeElement === $event.target) {
            this.dismiss(ModalDismissReasons.BACKDROP_CLICK);
        }
    }

    escKey($event): void {
        if (this.keyboard && !$event.defaultPrevented) {
            this.dismiss(ModalDismissReasons.ESC);
        }
    }

    dismiss(reason): void { this.dismissEvent.emit(reason); }

    ngOnInit() {
        this._elementWithFocus = document.activeElement;
        this._renderer.addClass(document.body, 'modal-open');
    }

    ngAfterViewInit() {
        if (!this._elementRef.nativeElement.contains(document.activeElement)) {
            this._elementRef.nativeElement['focus'].apply(this._elementRef.nativeElement, []);
        }
    }

    ngOnDestroy() {
        const body = document.body;
        const elWithFocus = this._elementWithFocus;

        let elementToFocus;
        if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
            elementToFocus = elWithFocus;
        } else {
            elementToFocus = body;
        }
        elementToFocus['focus'].apply(elementToFocus, []);

        this._elementWithFocus = null;
        this._renderer.removeClass(body, 'modal-open');
    }
}