import { NotificationType } from "./notification-type";

export class Notification {
    id: string;
    type: NotificationType;
    date: Date;
    message: string;

    constructor() {
        this.id = this.generateUUID();
        this.date = new Date();


        this.message = "MESSAGE?";
    }

 
    private generateUUID(): string {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
}