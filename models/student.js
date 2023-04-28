
// set this file to export a function that sets the student object configured for database actions
module.exports = (sequelize, DataTypes) => {

    // establish the student object with ORM dat type settings
    let Student = sequelize.define('Student', {

        // This describes the structure of the student object and how the DB stores the student table
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }, starID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            // use a regular expression to validate the use of a star id format
            validate: {
                is: /^[a-z][a-z]\d\d\d\d[a-z][a-z]$/
            }
        }, present: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    })

    // Force - choose to drop the table in place
    // true = drop every time the app restarts (for Schema changes)
    // false = keep table

    // Sync will create the database, force will overwrite the older data sets
    Student.sync({force: false}).then( () => {
        console.log('synced student table')
    })

    // return the student model
    return Student

}