//https://github.com/sstorie/experiments/blob/master/angular2-animated-notifications-panel/app/app.component.ts

import { Component } from "@angular/core";
import { NotificationsService } from "./notifications/notifications.service";

import { NotificationPanelComponent } from "./notifications/notification-panel.component";

@Component({
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    selector: "app"
})
export class AppComponent {
    constructor(
        private _notificationsService: NotificationsService
    ) {

        for (let i = 0; i < 10; i++) {
            let n = this._notificationsService.createRandomNotification();
            this._notificationsService.addNotification(n);
        }

        this._notificationsService.startRandomGeneration();
    }
    
}