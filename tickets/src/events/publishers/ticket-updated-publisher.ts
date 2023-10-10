import { TicketUpdatedEvent, Publisher, Subjects } from '@ajay404/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
