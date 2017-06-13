# comic-inventory-app

work in progress - full stack app
server: node express server with jwt authentication, mongoDB
client: react, redux, redux-thunk

## Notes: 
* run server: `nodemon server.js`
* view in browser: `http://localhost://8080`


### 06.12.17 up til now what's done:
* express server set up
* authentication works
* db set up - users
* comicvine api test routes set up, working

### 06.13.17 working on:
* `/controllers/item.js`
* `/models/item.js`
* `/models/user.js`
### next:
* make csv mockup, import as item collection mlab
* finish schema item, test
* make methods currency populate/ convert in item controller, test
* make method to populate info from 3rd party api comic vine
* add a form to react to add/ edit issues, test
