import { Workflow } from "./Workflow";
import { NotificationFactory } from "../factory/NotificationFactory";
import { NotificationContext } from "../services/NotificationContext";
import { NotificationSubject } from "../observers/NotificationSubject";
import { BaseSender } from "../decorators/BaseSender";
import { RetryDecorator } from "../decorators/RetryDecorator";

export class UserRegistrationWorkflow
implements Workflow {

    constructor(
        private subject: NotificationSubject
    ) {}

    execute(): void {

        console.log("\n User Registration Workflow Started");

        const email =
        NotificationFactory.create("email");

        const sms =
        NotificationFactory.create("sms");

        const emailContext =
        new NotificationContext(email);

        const smsContext =
        new NotificationContext(sms);

         const sender =
        new RetryDecorator(
        new BaseSender()
        );

        sender.send(
         "Welcome"
        );

        smsContext.execute(
            "account created successfully"
        );

        this.subject.notify(
            " Registration Notifications Sent"
        );
    }
}