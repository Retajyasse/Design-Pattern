import { SendStrategy } from "./SendStrategy";

export class EmailStrategy implements SendStrategy {

    send(message: string): void {
        console.log(` Email Sent: ${message}`);
    }
}