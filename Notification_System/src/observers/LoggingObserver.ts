import { Observer } from "./Observer";

export class LoggingObserver implements Observer {

    update(data: string): void {
        console.log(`Logging Observer: ${data}`);
    }
}