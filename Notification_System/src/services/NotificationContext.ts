import { SendStrategy } from "../strategies/SendStrategy";

export class NotificationContext {

    constructor(
        private strategy: SendStrategy
    ) {}

    execute(message: string): void {
        this.strategy.send(message);
    }

    setStrategy(strategy: SendStrategy): void {
        this.strategy = strategy;
    }
}