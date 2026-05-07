import { NotificationSender } from "./NotificationSender";

export abstract class SenderDecorator
implements NotificationSender {

    constructor(
        protected sender: NotificationSender
    ) {}

    send(message: string): void {
        this.sender.send(message);
    }
}