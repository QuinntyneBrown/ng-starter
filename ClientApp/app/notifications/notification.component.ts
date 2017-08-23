import {
    Component,
    OnInit,
    Input,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

import { Notification } from "./notification.model";
import { NotificationType } from "./notification-type";

@Component({
    selector: 'ce-notification',
    templateUrl: 'notification.component.html',
    styleUrls: ['notification.component.css'],
    animations: [
        trigger('visibleTrigger', [
            state('visible', style({ opacity: '1' })),
            transition('void => *', [style({ opacity: '0' }), animate('200ms 300ms')]),
            transition('* => void', [animate('200ms', style({ opacity: '0' }))])
        ])
    ]
})
export class NotificationComponent implements OnInit {
    @Input() notification: Notification;
    @Input() expanded: boolean;

    notificationTypes = NotificationType;

    constructor() { }

    ngOnInit() { }
}