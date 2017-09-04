import {Component, ViewEncapsulation, ElementRef} from "@angular/core";

@Component({
    templateUrl: "./test.component.html",
    styleUrls: ["./test.component.css"],
    selector: "ce-test",
    encapsulation: ViewEncapsulation.Native
})
export class TestComponent {
    constructor(private _elementRef: ElementRef) {
        var styleNode = document.createElement('style');
        styleNode.type = 'text/css';
        styleNode.appendChild(document.createTextNode(':host h1 { color: red; }'));
        (<HTMLElement>this._elementRef.nativeElement).shadowRoot.appendChild(styleNode);
    }

}
