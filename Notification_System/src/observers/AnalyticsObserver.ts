import { Observer } from "./Observer";

export class AnalyticsObserver implements Observer {

    update(data: string): void {
        console.log(`Analytics Updated: ${data}`);
    }
}