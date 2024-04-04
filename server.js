const app = require("./app.js");
const httpPort = 3000;

/*
https.createServer(options, app).listen(httpsPort, () => {
  console.log(`HTTPS: Express listening on port ${httpsPort}`);
});
*/
//const corsOption = { origin : 'http://localhost:3000',credentials : true,}

//app.use(cors(corsOption));

app.listen(httpPort, () => {
  process.send('ready');
  console.log(`HTTP: Express listening on port ${httpPort}`);
});
