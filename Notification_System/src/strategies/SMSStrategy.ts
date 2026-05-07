import { SendStrategy } from "./SendStrategy";

export class SMSStrategy implements SendStrategy {

    send(message: string): void {
        console.log(`SMS Sent: ${message}`);
    }
}