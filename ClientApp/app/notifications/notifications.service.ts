﻿import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subscription } from "rxjs/Rx";
import { NotificationType } from "./notification-type";

import { EnumExtensions } from "./enum-extensions";
import { Notification } from "./notification.model";

@Injectable()
export class NotificationsService {
    randomGeneration: boolean;
    notifications$: Observable<Notification[]>;

    private notificationsSubject: ReplaySubject<Notification[]>;
    private notifications = new Array<Notification>();
    private randomSub: Subscription;

    constructor() {
        this.notificationsSubject = new ReplaySubject<Notification[]>(1);
        this.notifications$ = this.notificationsSubject.asObservable();
    }

    startRandomGeneration() {
        this.randomSub = Observable.interval(5000).subscribe(() => {
            let notification = this.createRandomNotification();
            this.addNotification(notification);
        })
    }

    stopRandomGeneration() {
        if (this.randomSub !== undefined) {
            this.randomSub.unsubscribe();
        }
    }

    addNotification(notification: Notification) {
        this.notifications = [...this.notifications, notification];
        this.notificationsSubject.next(this.notifications);
    }

    removeNotification(id: string) {
        this.notifications = this.notifications.filter((x) => x.id !== id);
        this.notificationsSubject.next(this.notifications);
    }

    clearNotifications() {
        this.notifications = new Array<Notification>();
        this.notificationsSubject.next(this.notifications);
    }

    createRandomNotification(): Notification {
        let notification = new Notification();

        let types = EnumExtensions.getValues(NotificationType);
        notification.type = types[Math.floor(Math.random() * types.length)];

        return notification;
    }
}