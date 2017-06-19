# Comic Inventory App Spec

### Authentication Header:

`Authorization: Token jwt.token.here`

## JSON Objects returned by API:

### Users (for authentication)

```JSON
{
  "user": {
    "email": "chris@chris.chris",
    "token": "jwt.token.here",
    "userName": "chris",
    "password": "password.here",
    "hoards": [
        { type: SchemaTypes.ObjectID, ref: 'Hoard' },
    ],
    itemsInUserHoard: [
      {
        "type": Schema.Types.ObjectId, ref: 'Item',
        "itemGrade": "itemGrade.here"
        "itemPurchPrice": "itemPurchPrice.here"
      },
    ],
  }
}
```

### Single Item (public)

```JSON
{
"itemTitle": "TitleofIssue_insertFromComicVineApi",
  "issueNumber": "numberofissue.here",
  "hoardID": 
  "collectionName": "FromWhichHoard.here", 
  "publisher": "hoard.publisher.here", 
  "year": "year.here", 
}
```
* collection name note:
* populated if hoard already created - matched on publisher, year, collectionName

### Single Hoard (public)

also could be thought of as group, collection, or series.

```JSON
{
    "collectionName": "FromWhichHoard.here", 
    "publisher": "hoard.publisher.here", 
    "year": "year.here", 
    items: [
        "item_ID: "Id code created by mongoDB",
        ...
        populated by relevant item data
        ...
    ]
}

### Errors and Status Codes

If a request fails any validations, expect a 422 and errors in the following format:

```JSON
{
  "errors":{
    "body": [
      "can't be empty"
    ]
  }
}
```

#### Other status codes:

401 for Unauthorized requests, when a request requires authentication but it isn't provided

403 for Forbidden requests, when a request may be valid but the user doesn't have permissions to perform the action

404 for Not found requests, when a resource can't be found to fulfill the request

## Endpoints Summary:
* POST /users/signup @TOTEST
* POST /users/signin @TODO
* POST /hoards - create new hoard if not there 
* GET /hoards - queries @TODO
* GET /hoards ->list of all hoards @done
* GET /myhoards - only hoards belonging to user
* Put /hoards @TODO edit existing
* POST /items - create new items if not there
* GET /items ->list of all items @done
* GET /items - queries @TODO
* PUT /items - edit existng item

## Endpoints Detail:
NOTE: This section incomplete. See Endpoints summary above for all endpoints expected.
### Authentication:

`POST /users/login`

Example request body:
```JSON
{
  "user":{
    "email": "chris@chris.com",
    "password": "chrischris"
  }
}
```

No authentication required, returns a [User](#users-for-authentication)

Required fields: `email`, `password`


### Registration:

`POST /users`

Example request body:
```JSON
{
  "user":{
    "username": "Chris",
    "email": "chris@chris.chris",
    "password": "chrischris"
  }
}
```

No authentication required, returns a [User](#users-for-authentication)

Required fields: `email`, `username`, `password`

### Get Current User

`GET /user`

Authentication required, returns a [User](#users-for-authentication) that's the current user

### List Collections 

`GET /hoards`

Returns all collections globally be default, provide `collectionName` or `publisher` query parameter to filter results

Query Parameters:

Filter by publisher:

`?publisher="Gold Key"`

Authentication optional, will return [multiple hoards](#multiple-hoards), ordered by most recent first

### Create Collection

`POST hoards`

Example request body:

```JSON
{
    hoards: {[
        "collectionName": "Dagar the Invincible",
        "publisher": "Gold Key",
        "year": 1972,  
    ]},
  }
```

### Create Items:

--------------------------------
### Not Yet Coded:
--------------------------------
### Update User 

`PUT /user`

Example request body:
```JSON
{
  "user":{
    "email": "chris@chris.chris",
    "collectionName": "Dagar the Invincible",
    "issueNumber": 3,
    "itemGrade": 9.2,
    "itemPurchPrice": 13
  }
}
```

Authentication required, returns the [User](#users-for-authentication)


Accepted fields: `email`, `username`, `password`

