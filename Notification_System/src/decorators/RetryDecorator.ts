import { SenderDecorator } from "./SenderDecorator";

export class RetryDecorator extends SenderDecorator {

    send(message: string): void {

        try {

            console.log("Trying to send");
            super.send(message);

        } catch(error) {

            console.log("Retrying to send");
            super.send(message);
        }
    }
}