import { defineConfig } from "cypress";
import {Client} from 'pg'
import { hash } from "bcrypt";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      on('task', {
        async 'db:seed'() {
          const client = new Client({
            // Wir verwenden hier weiterhin die Umgebungsvariable
            connectionString: process.env.DATABASE_URL, 
          });
          
          await client.connect();
          
          try {
            const hashedPassword = await hash("Passwort123!", 10);
            // Spezifiziere das Schema und die Tabelle in der Abfrage
            await client.query('DELETE FROM "User"."User"'); 
            await client.query(
              "INSERT INTO \"User\".\"User\" (email, username, password) VALUES ($1, $2, $3)",
              ['testuser@example.com', 'testuser0', hashedPassword]
            );
          } finally {
            await client.end();
          }
          
          return null;
        },
      });
      return config;
    },
  },
});
