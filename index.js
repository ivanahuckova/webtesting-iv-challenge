const server = require('./api/server');
const port = process.env.PORT || 3333;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
