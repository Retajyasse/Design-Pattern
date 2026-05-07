import { Logger } from "./utils/Logger";

import { NotificationSubject }
from "./observers/NotificationSubject";

import { LoggingObserver }
from "./observers/LoggingObserver";

import { AnalyticsObserver }
from "./observers/AnalyticsObserver";

import { UserRegistrationWorkflow }
from "./workflows/UserRegistrationWorkflow";

import { OrderWorkflow }
from "./workflows/OrderWorkflow";

const logger = Logger.getInstance();

logger.log("Notification System Started");

const subject =
new NotificationSubject();

subject.subscribe(
    new LoggingObserver()
);

subject.subscribe(
    new AnalyticsObserver()
);

const registerWorkflow =
new UserRegistrationWorkflow(subject);

registerWorkflow.execute();

const orderWorkflow =
new OrderWorkflow(subject);

orderWorkflow.execute();