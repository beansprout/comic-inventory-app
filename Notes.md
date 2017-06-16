### 06.12.17 up til now what's done:
* express server set up
* authentication works
* db set up - users
* comicvine api test routes set up, working

### 06.13.17 working on:
* `/controllers/item.js`
* `/models/item.js`
* `/models/user.js`


### 06.14.17 worked on structure for app (planning)
* added dummydata to server
* added currency plugin for mongoose types
* added to user schema, added types
* added module require_optional

### 06.15.17 worked on debugging schemas/controllers, creating routes
* Finally got schemas/ models to not break my server.
* Added GET and POST routes for database
* started building folder structure for react redux app
* installed dependencies for react redux wiring up
* installed plugin mongoose-string-query for writing search routes more easily

* Here's how I found the problem with my schemas/controllers
- had an issue where the server kept crashing
- thought I had a typo since I wrote a lot of code trying to think through how to structure the database
- went through fixing all the files, still kept getting errors
- thought I had a varaible mismatch went through all the user vs users type checks
- finally googled the error I was getting and the problem was due to a quirk of mongoose (rather than a quirk of my logic which tends to be suspect at the best of times.)
* Here's the [link to the issue](https://github.com/Automattic/mongoose/issues/3768#issuecomment-178313121)
* excerpt:
```
  Supporting this behavior would involve a massive refactor of mongoose connections. Long story short, require('mongoose').model(); is different than var model = require('mongoose').model; model(); because the value of this in the former function call is the require('mongoose'); singleton, whereas it is the global object in the latter call. If you want a workaround, model.call(require('mongoose'), 'MyModelName', schema); should work fine. I'm not a huge fan of the fact that mongoose's top level functions are laden with side effects, but to get rid of that we'd also have to get rid of the mongoose.model() getter syntax, which would break a lot of people's code.
```

### next:
* testing out routes/ creating getting etc. 
* make methods currency populate/ convert in item controller, test
* make method to populate info from 3rd party api comic vine
* add a form to react to add/ edit issues, test
* add a way to search -> install plugin mongoose-string-query

## Collections Reference:
* hoards - collections i.e. which series or group.  Example Comic book series 'The Avengers'
* items - refers to an issue or item in a series or group, child of a 'hoard'
* users - who owns the collection.  

## Methods to add: 
* populate on update 
* check if exists already on save, if not createNew, else return existing
* validate for whatever
* search 

## Query Routes to Do/ Done:

* GET   '/'
        '/hoards' return a list of all hoards @done
        '/items' return a list of all items @done
        '/users' return a list of users by username @TODO
* GET by search parameters
    * Examples
         '/hoard?collectionName=collectionName'
         '/item?itemName=IssueName&issueNumber=number'
         use format from plugin mongoose-string-query
* POST routes - for creating new users, hoards, or items
        '/hoard' to add a new hoard @done
        '/item' to add a new item @done
        '/user' to add a new user @done
* Still need to add validation to POSTs

* PUT routes (to edit existing documents)


# Reference - 'joining' in Mongo/Mongoose
```
ItemSchema {
  
}

UserSchema {
  items: [{type: Schema.Types.ObjectId, ref: 'Item'}]
}

item {
  id: ObjectId('dfnpawit204t8h24th23th2049th024r'),
  someValue: 'hi',
  anotherKey: 'sup',
}

user {
  items: [
    {
      id: ObjectId('dfnpawit204t8h24th23th2049th024r'),
      someValue: 'hi',
      anotherKey: 'sup',
    },
    ObjectId('dfnpawit204t8h24th23th2049thdsfr'),
    ObjectId('dfnpawit204t8h24th23th2329th024r'),
    ObjectId('dfnpawit204t8h24th23th2049th0asr'),
  ],
}
  
Users.find({}).populate('items');

------------------------------
FindOrFail snippet for Mongoose Express server

 From module findOneOrFail
 https://github.com/Turanchoks/mongoose-findoneorfail

module.exports = (schema, options) => {
    var options = Object.assign({}, options);

    schema.statics.findOneOrFail = function() {
        return this
            .findOne.apply(this, arguments)
            .exec()
            .then(doc => {
                if (doc) {
                    return doc;
                } else {
                    var err = new Error(options.NotFoundMessage || 'Not Found');
                    err.statusCode = 404;
                    throw err;
                }
            });
    };
};

# Example Use with expressjs

app.get('/models/:id', (req, res, next) => {
    MongooseModel
        .findOneOrFail({
            id: req.params.id
        })
        .then(model => res.send(model))
        .catch(next);
});

---------------------------