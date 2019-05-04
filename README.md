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

######source:
https://stackoverflow.com/questions/47975929/socketexception-address-already-in-use-mongodb

---
