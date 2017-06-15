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

### next:

* finish schema item, test
* make methods currency populate/ convert in item controller, test
* make method to populate info from 3rd party api comic vine
* add a form to react to add/ edit issues, test

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
