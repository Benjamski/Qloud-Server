'use strict';

module.exports = require('lib/wiring/routes')

// create routes

// what to run for `GET /`
.root('root#root')

// standards RESTful routes
.resources('examples')
.resources('files')
.resources('folders')

.post('/nodes/create-file', 'nodes#createFile')
.post('/nodes/create-folder', 'nodes#createFolder')
// custom routes for file system navigation
.post('/folders/test', 'folders#show')
.post('/files/test', 'files#show')
// users of the app have special requirements
.post('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')
.resources('users', { only: ['index', 'show'] })

// all routes created
;
