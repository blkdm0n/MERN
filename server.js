import config from './config';

//import express, create the server

import express from 'express';
const server = express();

//express handles routing for us as well

server.get('/', (req, res) => {
  res.send('Hello Express');  
});

server.get('/about', (req,res) => {
  res.send('The about page');
});

//.listen takes the port to listen on and an option success callback

server.listen(8080, () => {
  console.info('Express listening on port: ', config.port);
});

//