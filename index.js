import 'dotenv/config';

import '@globetel/cxs-core/core/clairvoyance/index.js';
import { config } from '../convict/config.js';
import { startServer } from './server.js';

const { serverStopTimeout } = config.get('serverStopTimeout'); 

const startup = async () => {
  try {
    const s = await startServer();

    console.log(`Server running at: ${s.info.uri}`);

    const shutdown = async () => {
      var t = Number(serverStopTimeout);
      console.log('Gracefully shutting down server...');
      await s.stop({ timeout: t });
      process.exit(0);
    };

    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
  } catch (err) {
    process.exit(1);
  }
};

startup();
