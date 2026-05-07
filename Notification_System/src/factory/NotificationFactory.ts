import { SendStrategy } from "../strategies/SendStrategy";
import { EmailStrategy } from "../strategies/EmailStrategy";
import { SMSStrategy } from "../strategies/SMSStrategy";
import { PushStrategy } from "../strategies/PushStrategy";

export class NotificationFactory {

    static create(type: string): SendStrategy {

        switch(type.toLowerCase()) {

            case "email":
                return new EmailStrategy();

            case "sms":
                return new SMSStrategy();

            case "push":
                return new PushStrategy();

            default:
                throw new Error("Invalid notification");
        }
    }
}