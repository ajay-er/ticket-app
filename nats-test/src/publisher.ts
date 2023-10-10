import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';

const client = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});

console.clear();

client.on('connect', async () => {
  console.log('Publisher connected to NATS');

  const publisher = new TicketCreatedPublisher(client);

  try {
    await publisher.publish({
      id: '123',
      price: 99,
      title: 'hei_title_sample',
    });
  } catch (e) {
    console.log(e);
  }

  // const data = JSON.stringify({
  //   id: '123',
  //   title: 'concert',
  //   price: 20,
  // });

  // client.publish('ticket:created', data, () => {
  //   console.log('Event published');
  // });
});
