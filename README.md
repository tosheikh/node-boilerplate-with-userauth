# node-boilerplate-with-userauth
Node + express + sequelize boilerplate with user authentication using jwtauth. 

To run the app, follow the following steps.

Install node modules by running
```npm install```

To run initial migrations to set up user table, run 
```node_modules/.bin/sequelize sequelize db:migrate```

To seed initial data for users, run 
```node_modules/.bin/sequelize db:seed:all```

To start the api, run 
```npm start```

and navigate to http://127.0.0.1:3000. You should see a page with "Kaisa Hay Cheetay" title.

To access auth routes, try GET ```http://127.0.0.1:3000/api``` to see an auth error.

To authenticate, send a POST request to ```http://127.0.0.1:3000/api/authenticate``` with the following body: 
```{"email": "johndoe@johndoe.com", "password": "abc123"}```

To verify if authentication was valid, send a GET request ```http://127.0.0.1:3000/api/users``` with the Authentication token. It should return all users that were seeded. 
