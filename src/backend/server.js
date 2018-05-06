const Hapi = require("hapi");
const routes = require("./routes");
const server = Hapi.server({
  port: 3001,
  host: "localhost"
});

server.route(routes);

const initServer = async () => {
  await server.start();
  console.log(`Server running  at: ${server.info.uri}`);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

initServer();
