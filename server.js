// Require the express package (similar to import)
let express = require('express')

// After routes configuration*
// Import the routes file for the api calls
let api_routes = require('./routes/api')

// spawn the app object which runs the express package
let app = express()

// After routes configuration*
// send requests with json bodies to the api router
// tell the app to use express  methods to handle json data
// converts data to javascript
app.use(express.json())
// tell the app to use the /api base to our API routing object
// set the api instance info
app.use('/api', api_routes)

// add error handling tools for routing activities in the api calls
// general error handling:
app.use(function (req, res, next) {
    res.status(404).send('Not found')
})

// for developers
app.use(function(req, res, next, err) {
    console.error(err.stack)
    // and a response to client
    res.status(500).send('Server error')
})


// create the server using the app object, create a port to listen to activity over
// and establish a function to provide data
let server = app.listen(process.env.PORT || 3000, function () {
    // Inform the dev that the Express server is now running on port 300
    console.log('Express server is running on port', server.address().port)
})
