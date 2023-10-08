import nats from 'node-nats-streaming';

const client = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});

console.clear();

client.on('connect', () => {
  console.log('Publisher connected to NATS');

  const data = JSON.stringify({
    id: '123',
    title: 'concert',
    price: 20,
  });

  client.publish('ticket:created', data, () => {
    console.log('Event published');
  });
});
