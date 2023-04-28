// configure the config.json file to set up a connection to the database
// syntax errors likely here

// import the Sequelize and DataTypes modules from the sequelize package
let { Sequelize, DataTypes }  = require('sequelize')

// environment variables are stored by the computer, can be in the .env file
// set the environment to be development if there is no environment set
// (the || (or) Must match the name in the config.json file for local deployment)
let env = process.env.NODE_ENV || 'development'

// Display the environment being used
console.log('using ' + env)

// Load the config file by importing the file from the above directory
let configFile = require(__dirname + '/../config.json')

// this collects the env settings object from the file, hence why
// the default must match what was used in the config file
let config = configFile[env]

// for development, this not needed. however, deploying to azure requires this addition
// using an env variable can keep your password secure
let password = process.env.DB_PASSWORD
// above password is undefined during the development phases
// Set the DB_PASSWORD environment variable at Azure to deploy during Azure Site Processes


// after you collect a password, set a config key value pair
// to match the password for the username at Azure
config.password = password


// create an object to store the database
let db = {}

// create a new sequelize object from the configuration settings
// (remember this makes the database changes simple)
// use the sequelize module imported above
let sequelize = new Sequelize(config)


// create the student object creation function by exporting the data from the student.js file you created earlier
let studentModelCreate = require('./student')

// This set will actually use the function created above with the sequelize object and
// data types we configure in the student object
let studentModel = studentModelCreate(sequelize, DataTypes)

// This line establishes that our DB object will use the name of the student to set the new Sequelize
// object and DataTypes as each student

// we are essentially taking our function return from above and inserting it into our db as an object
db[studentModel.name] = studentModel

// define your sequelize configuration
db.sequelize = sequelize

// establish the Sequelize library
db.Sequelize = Sequelize

// deliver the database of objects
module.exports = db