// require the express package
let express = require('express')

// import the models directory for the database
// (index.js exports to this db object)
let db = require('../models')

// create the student model from the index.js file in models
let Student = db.Student

// create the router object to handle the request match routing to functions
let router = express.Router()

// create the tasks to handle when a get request is made
router.get('/students', function (req, res, next){
    // use the findAll method to create a promise that returns all the student information
    Student.findAll({order: [`StarID`] }).then( students => {
        // return all student information as a json object
        return res.json(students)
    }).catch( err => next(err))
})

// create the tasks to handle when a post request is made
router.post('/students', function (req, res, next){
    // use the create method with the request body (json from the vue app)
    // to add a new student to the student model
    Student.create(req.body).then( data => {
        // respond with a success range server code and accept message
        return res.status(201).send('ok')
    }).catch( err => {
        // Handle user errors
        if (err instanceof db.Sequelize.ValidationError) {
            // respond with a bad request code and error message
            let messages = err.errors.map(e => e.message)
            return res.status(400).json(messages)
        }

        // Solve for unexpected errors
        return next(err)
    })
})

// create a route to modify the student
router.patch('/students/:id', function (req, res, next) {
    // Collect the unique id
    let studentID = req.params.id
    // collect the student object
    let updatedStudent = req.body

    // Update the student information and produce a status
    Student.update( updatedStudent, {where: {id: studentID }})
        .then( (rowsModified) => {
            // count how many rows was modifies
            let numberRowsModified = rowsModified[0]

            if (numberRowsModified == 1) {
                return res.send('ok')
            } else {
                return res.status(400).json(['Student with that id not found'])
            }
        }).catch(err => {
        if (err instanceof db.Sequelize.ValidationError) {
            let messages = err.errors.map( e => e.message )
            return res.status(400).json(messages)
        } else {
            return next(err)
        }
    } )

})


// delete student route
router.delete('/students/:id', function (req, res, next) {
  let studentID = req.params.id
    Student.destroy({where: {id: studentID}})
      .then( (rowsDeleted) => {
          if (rowsDeleted == 1) {
              return res.send('ok')
          } else {
              return res.status(404).json(['Not found'])
          }
      }).catch( err => next(err))
})


// export the router that directs the calls
module.exports = router