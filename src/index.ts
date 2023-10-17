// Setup basic express server
import express from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app);

const port = process.env.PORT || 3000;

// Routing
app.get('/test', (req, res) => {
  res.send('Hello World!');
});

server.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
