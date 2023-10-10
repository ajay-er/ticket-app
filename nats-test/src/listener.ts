import { randomBytes } from 'crypto';
import nats from 'node-nats-streaming';
import { TicketCreatedListener } from './events/ticket-created-listener';

const client = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222',
});

console.clear();

client.on('connect', () => {
  console.log('Listener connected to NATS');

  new TicketCreatedListener(client).listen();
});
