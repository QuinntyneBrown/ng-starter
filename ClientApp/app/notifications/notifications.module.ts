import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";
import { NotificationsService } from "./notifications.service";
import { NotificationPanelComponent } from "./notification-panel.component";
import { NotificationComponent } from "./notification.component";

const declarations = [NotificationPanelComponent, NotificationComponent];

const providers = [NotificationsService];


@NgModule({
    declarations: declarations,
    providers: providers,
    exports: declarations,
    imports: [BrowserAnimationsModule, CommonModule, BrowserModule]
})
export class NotificationsModule { }