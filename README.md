# node-boilerplate-with-userauth
Node + express + sequelize boilerplate with user authentication using jwtauth. 

## Setup
To run the app, follow the following steps.

1. Install node modules by running
```npm install```

2. Set up a db named unicorn on your local mysql. If you already have a db, edit the db name in config/config.js file.

3. To run initial migrations to set up users table, run 
```node_modules/.bin/sequelize sequelize db:migrate```

4. To seed initial data for users, run 
```node_modules/.bin/sequelize db:seed:all```

5. To start the api, run 
```npm start```

and navigate to http://127.0.0.1:3000. You should see a page with "Hi There!" title and db it is connected to.

## Routes
To access auth routes, try GET ```http://127.0.0.1:3000/api``` to see an auth error.

To authenticate, send a POST request to ```http://127.0.0.1:3000/api/authenticate``` with the following body: 
```{"email": "johndoe@johndoe.com", "password": "abc123"}```

To verify if authentication was valid, send a GET request ```http://127.0.0.1:3000/api/users``` with the Authentication token. It should return all users that were seeded. 
