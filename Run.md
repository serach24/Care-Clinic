================
## Run Server Infomation
* `cd client`
* `npm install`
* `npm run build`
### Back to the main folder
* `cd -`
* `npm install`
* `node server.js`
### Also start mongo service before start the express server
* `mkdir mongo-data`
* `mongod --dbpath mongo-data`

### Shutdown mongo process
* `mongod --shutdown`