# arg-tech-task

Tech stack used: NodeJS, ExpressJS, Sequelize ORM, PostgreSQL DB

Please follow the steps for the setup:

>`git clone https://github.com/namanjd/arg-tech-task.git`

>`cd arg-tech-task`

>`npm i`

>In PostgreSQL create a db

>rename `.env.sample` file to `.env` 

>Set `NODE_ENV` variable in `.env` to `development`

>Update the database connection parameters

>`npx sequelize db:migrate`

>`nodemon index.js` / `nodemon` / `node index.js`

>Import postman collection and update the parameters like `port`  in the URLs and after login, use the generated JWT token as Bearer token for the requests
