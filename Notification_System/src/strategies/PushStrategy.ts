import { SendStrategy } from "./SendStrategy";

export class PushStrategy implements SendStrategy {

    send(message: string): void {
        console.log(`Push Sent: ${message}`);
    }
}