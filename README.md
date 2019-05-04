### Christy POC trial - simplest fullstack react CRUD (no redux)

---

######To check the data in mongo database ->
terminal1 (to start the database make it running)(it has to keep running for data query)

```
mongod
```

terminal2 (to access to the db data using query)

```
mongo
```

```
show dbs (to show all database choices)
use <database name> (usually the repo name, anyway it is config by us in DB.js)
db.business.find().pretty() (the "business" is the model's name we defined in the mongoose schema)
```

---

######Got a strange error when starting up mongo db using mongod

solution:
You can kill the previous mongod instance and start the new one.
To kill the previous mongod instance:
see all the port running on the machine by:
`sudo lsof -iTCP -sTCP:LISTEN -n -P`
Search for mongod COMMAND and its PID and type, and type the following to kill the running port (in case the pid is 47429)
`sudo kill 47429`

######source: https://stackoverflow.com/questions/47975929/socketexception-address-already-in-use-mongodb

---

#####Get a `warning` when building [edit] component
`A component is changing an uncontrolled input of type text to be controlled error in ReactJS`

Reason: When I first define the state object in the constructor, i use enmpty string as the keys of the items. the value of the items in the state turned into `undefined`. And after componentDidMount() to grab the data and `this.setState(.....)`, I updated the state and the value of the items in state turned into something and not undefined any more. `In short, it changed the state's items' datatype`, which causing this warning.

#####Solutions:

1- Define the fields in state as:

`this.state = { fields: {name: ''} }`
2- (adopted in my case) Define the value property by using Short-circuit evaluation like this:

`value={this.state.fields.name || ''} // (undefined || '') = ''`

######source: https://stackoverflow.com/questions/47012169/a-component-is-changing-an-uncontrolled-input-of-type-text-to-be-controlled-erro/47012342

---

Question : When I am trying to make the redirect page function using `history`, I got a question-> When to use react-router-dom and react-router?

######Answer: https://stackoverflow.com/questions/42684809/react-router-vs-react-router-dom-when-to-use-one-or-the-other

---

Problem: `How to redirect react page?`

- Tried `Redirect`, doesn't really work
- => Tried `history`, after using withRouter() HOC(see edit.js), history is working and page redirected on submit)

Another Problem: Only the page is redirected to /index, but the data on /index is not updated. (After checking in mongodb, the data is succesfully updated, just the state for /index is not yet updated(? I don't know if this problem will disappear if I change to use Redux))

- Tried componenetDidUpdate() in index.js => work, but...

Another Problem: `Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.`

=> I guess it is something related to react lifecycle?

> Temporary solution:

`window.location.reload();`
Coz I plan to use react align with redux in the future projects, and I am not sure if this problem exists in redux, so I just temporary `solve` the problem by adding this line of code. It will reload the page but I am not sure if there will be any problem (like cleared all the state) for a single page application to refresh like this. May come back to this issue later if I have any updates.

######Source:

- https://www.tutorialspoint.com/reactjs/reactjs_component_life_cycle.htm
- https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md
- https://stackoverflow.com/questions/44312437/react-router-v4-this-props-history-push-not-working
- https://medium.com/@selvaganesh93/how-to-clean-up-subscriptions-in-react-components-using-abortcontroller-72335f19b6f7

---

######Deprecated found

> express deprecated res.send(status, body): Use res.status(status).send(body) instead

---

#####How to start up the app (after installing mongodb on your computer)

> Backend

(install backend packages)
`npm install`
(start up mongodb and let it keep running while you are using the app)
`mongod`
(start up backend)
`npm start` or `nodemon server.js`
(=> port running at 5000)

> Frontend

`cd fronetnd`
(install frontend packages)
`yarn install`
(start up frontend app)
`yarn start`
(=> react app running at 3000)
