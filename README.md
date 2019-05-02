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
