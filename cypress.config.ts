import { defineConfig } from "cypress";
import {Client} from 'pg'

export default module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      on('task', {
        async 'db:seed'() {
          const client = new Client({
            // Ihre Verbindungs-URL
            connectionString: 'postgresql://...', 
          });
          
          await client.connect();
          await client.query('DELETE FROM users');
          await client.query(
            "INSERT INTO User (email, username, password) VALUES ($1, $2, $3)",
            ['testuser@example.com', 'testuser0', 'Passwort123!']
          );
          await client.end();
          
          return null;
        }
      });
      return config;
    },
  },
});
