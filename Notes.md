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

### 06.15.17 worked on debugging schemas/controllers
* Finally got schemas/ models to not break my server.

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
