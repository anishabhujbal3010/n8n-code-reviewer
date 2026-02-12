import 'dotenv/config';

import '@globetel/cxs-core/core/clairvoyance/index.js';
import { startServer } from './server.js';

const startup = async () => {
  try {
    const server = await startServer();

    console.log(`Server running at: ${server.info.uri}`);

    const shutdown = async () => {
      console.log('Gracefully shutting down server...');
      await server.stop({ timeout: 10000 });
      console.log('Server stopped');
      process.exit(0);
    };

    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
};

startup();
