# Full Stack Very Basic App Using Node, React, and Postgres

## Downloading and running - only perform once.

1. Install Postgres, Node, and a package manager (here it is npm).
2. Clone repository.
3. Run `createdb postgres-express-react-node-template` to create the database.
4. Add the table and seed the database:

 * `psql -d postgres-express-react-node-template -f db/migrations/migration-1542299195696.sql`
 * `psql -d postgres-express-react-node-template -f db/seeds/entries.sql`

5. Run `npm install` in your terminal to install dependencies.
6. Start the server with `npm start`.
7. In a separate tab build the front-end with `npm run build`.
8. Navigate to http://localhost:3000/ in your browser. 

## If already created db, seeded db, and installed everything.

* npm run build; npm run start

