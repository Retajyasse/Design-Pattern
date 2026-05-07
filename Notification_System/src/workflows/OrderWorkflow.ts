import { Workflow } from "./Workflow";
import { NotificationFactory } from "../factory/NotificationFactory";
import { NotificationContext } from "../services/NotificationContext";
import { NotificationSubject } from "../observers/NotificationSubject";

export class OrderWorkflow
implements Workflow {

    constructor(
        private subject: NotificationSubject
    ) {}

    execute(): void {

        console.log("\n Order Workflow Started");

        const email =
        NotificationFactory.create("email");

        const push =
        NotificationFactory.create("push");

        const emailContext =
        new NotificationContext(email);

        const pushContext =
        new NotificationContext(push);

        emailContext.execute(
            "Your order confirmed"
        );

        pushContext.execute(
            "Order shipped successfully"
        );

        this.subject.notify(
            "Order Notifications Sent"
        );
    }
}