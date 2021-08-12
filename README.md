# CRUD with ReactJS and Nodejs using MongoDB using Mongoose

A simple records add, edit, delete and view using MongoDB , Express.js, React.js, and Node.js Create, Read, Update, and Delete operations. REST API was implemented on the back-end. Ant design React was used for the UI.



## Instructions


#### # For Nodejs Server
*Make sure MongoDB service is running.*

- To work that in server folder contains a file named *server>server.js*. Before running locally, change the value of db as seen in the code below, Also change PORT as your database.

```js
mongoose.connect( 'mongodb://localhost:27017/orm_demo' , { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);
```

For the **server**, install the dependencies once via the terminal.
```bash
npm install
```

Run the *main server*. It listens on port 5000.
View it on the browser.

<br><br><br>

#### # For React JS Front End

If you want to configure the **front-end**, go to *client*  folder via the terminal.

```bash
cd client
```

Install the dependencies required by React once.
```bash
npm install
```

Run the *development server* for React. It listens on port 3000.
```bash
npm start
```

To make a production build, simply run on *client* folder via the terminal.
```bash
npm run build
```

It re-creates a folder named *public* on the root directory. This is where the production-ready front-end of the web application resides.


## Done

- [x] Create
- [x] Read
- [x] Update
- [x] Delete