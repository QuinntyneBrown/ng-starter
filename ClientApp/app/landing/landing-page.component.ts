import { Component, ApplicationRef, ComponentFactory, ComponentFactoryResolver, Injector} from "@angular/core";
import { ModalService } from "../shared/services/modal.service";
import { TestComponent } from "./test.component";

@Component({
    templateUrl: "./landing-page.component.html",
    styleUrls: ["./landing-page.component.css"],
    selector: "ce-landing-page"
})
export class LandingPageComponent {
    
    constructor(
        private _injector: Injector,
        private _modalService: ModalService
    ) {
        
    }

    ngOnInit() {

        this._modalService.open({ content: TestComponent, injector: this._injector });

        setTimeout(() => {
            //this._modalService.close();
        }, 3000);
    }
}
