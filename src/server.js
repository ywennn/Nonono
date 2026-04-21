import server from './server/index.js';
import 'dotenv/config';
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

server.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});
