import app from "./app.js";
import http from "http";
const port = process.env.PORT;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
