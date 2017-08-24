import { Component, ApplicationRef, ComponentFactory, ComponentFactoryResolver, Injector} from "@angular/core";
import { DynamicComponent } from "./dynamic.component";

@Component({
    templateUrl: "./landing-page.component.html",
    styleUrls: ["./landing-page.component.css"],
    selector: "ce-landing-page"
})
export class LandingPageComponent {
    private _dynamicComponentFactoryResolver: ComponentFactory<DynamicComponent>

    constructor(
        private _applicationRef: ApplicationRef,
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _injector: Injector
    ) {
        this._dynamicComponentFactoryResolver = _componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    }

    ngOnInit() {

        var containerElement = document.querySelector('body');
        var dynamicComponentRef = this._dynamicComponentFactoryResolver.create(this._injector);
        this._applicationRef.attachView(dynamicComponentRef.hostView);
        containerElement.appendChild(dynamicComponentRef.location.nativeElement);

        setTimeout(() => {

            (<HTMLElement>dynamicComponentRef.location.nativeElement).parentNode.removeChild((<HTMLElement>dynamicComponentRef.location.nativeElement).parentNode.firstChild);
            this._applicationRef.detachView(dynamicComponentRef.hostView);
        }, 3000);
    }
}
