import { TicketCreatedEvent, Publisher, Subjects } from '@ajay404/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
