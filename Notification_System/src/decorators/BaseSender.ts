import { NotificationSender } from "./NotificationSender";

export class BaseSender implements NotificationSender {

    send(message: string): void {
        console.log(`Sending: ${message}`);
    }
}