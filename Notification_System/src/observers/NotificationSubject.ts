import { Observer } from "./Observer";

export class NotificationSubject {

    private observers: Observer[] = [];

    subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    notify(data: string): void {

        this.observers.forEach(observer => {
            observer.update(data);
        });
    }
}